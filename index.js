const express = require('express')
// controllers
const productController = require('./controller/productController')

var app = express()
app.use(express.json()) //for parsing a json in the body
// app.use(express.urlencoded({extended:true})) // for parsing application/x-www-form-urlencoded

app.get('/products', productController.list);

app.get('/products/product',productController.getById);


app.post('/products/product', productController.post);

app.delete('/products/product', productController.delete)

var port = 3000
var host = 'localhost'

app.listen(port, host, function(){
    console.log(`Server start listening at localhost: ${port}`)
})
