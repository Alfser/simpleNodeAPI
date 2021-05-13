const { response } = require('express')
const express = require('express')

var app = express()
app.use(express.json()) //for parsing a json in the body
// app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded

// temporary database
var products = [{
    id:1,
    productName:"Smart phone ASUS",
    price:400.00,
    description:"Basic smart phone, 2Gb RAM, 32Gb of Memory."
},{
    id:2,
    productName:"Xaiome Note 9",
    price:1200.00,
    description:"Basic smart phone, 3Gb RAM, 64Gb of Memory."
},{
    id:3,
    productName:"Notebook Acer Aspire 5",
    price:2000.00,
    description:"Intel i5 3.5 GHz, 8Gb RAM, 1Tb of HDD."
},{
    id:4,
    productName:"Notebook Positivo",
    price:1400.00,
    description:"Intel i3 2.5 GHz, 8Gb RAM, 500Gb of HDD."
}]



app.get('/products', function(req, res){ 
    res.json(products)
});

app.get('/products/product', (req, res) =>{
    let productId = req.query.id
    if(!productId){
        res.status(400)
        res.json({message:"it need id of product in query string."})    
        return;
    }else{
        product = products.find(product => product.id == productId)
        if(!product){
            res.status(404)
            res.json({message:"Not found product."})    
            return;
        }

        res.status(200)
        res.json(product)

    }
});


app.post('/products/product', (req, res)=>{
    let product = req.body
    

    if(!product){   
        res.status(404)
        res.json({message:"Product need to be send at this request."})    
        return;
    }
    
    if(products.find(prod => prod.productName===product.productName)){
        res.status(400)
        res.json({err:"Product already recorded"})
        return;
    }

    products.push(product)
    res.status(201)
    res.json(product)
    console.log('Body:', product)
    
});

var port = 3000
var host = 'localhost'

app.listen(port, host, function(){
    console.log(`Server start listening at localhost: ${port}`)
})
