const express = require('express')

var app = express()
app.use(express.json()) //for parsing a json in the body
// app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded

// temporary database
var products = require("./mock/product")


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
