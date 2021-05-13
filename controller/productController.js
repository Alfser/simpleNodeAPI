const Product = require("../mock/product")

var productController = {
    list:(req, res) => {
        res.status(200)
        res.json(Product.getAll())
    },

    getById:(req, res) => {
        
        let productId = req.query.id
        
        if(!productId){
            res.status(400)
            res.json({message:"it need id of product in query string."})    
            return;
        }
        
        product = Product.base.find(product => product.id == productId)
        
        if(!product){
            res.status(404)
            res.json({message:"Not found product."})    
            return;
        }
    
        res.status(200)
        res.json(product)

    },

    post:(req, res) => {
        
        let product = req.body
            
        if(!product){   
            res.status(404)
            res.json({message:"Product need to be send at this request."})    
            return;
            }
            
        if(Product.base.find(prod => prod.productName===product.productName)){
            res.status(400)
            res.json({err:"Product already recorded"})
            return;
        }
        
        Product.add(product)
        res.status(201)
        res.json(product)
        console.log('Body:', product)
            
    },

    delete:(req, res) => {
        
        let productId = req.query.id
        
        if(!productId){
            res.status(400)
            res.json({message:"it need id of product in query string."})    
            return;
        }
        
        product = Product.base.filter(product => product.id = productId)
        
        if(!product){
            res.status(404)
            res.json({message:"Not found product."})    
            return;
        }

        filteredProducts = products.filter(product => product.id != productId)
        Product.base = filteredProducts
        res.status(200)
        res.json({massage:`product ${product.productName} removed.`})
    }
}

module.exports = productController