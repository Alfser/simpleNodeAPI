const { response } = require('express')
const express = require('express')

var app = express()

// temporary database
var products = [{
    id:1,
    productName:"Smart phone ASUS",
    price:400.00,
    description:"Basic smart phone, 2Gb RAM, 32Gb of Memory."
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
    res.json(product)
    /*
    if(!product){
        res.status(404)
        res.json({message:"Product need to be send at this request."})    
        return;
    }
        
    products.concat(product)
    res.status(201)
    res.json(product)
    */
});

var port = 3000
var host = 'localhost'

app.listen(port, host, function(){
    console.log(`Server start listening at localhost: ${port}`)
})
