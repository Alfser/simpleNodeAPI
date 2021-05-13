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
}];


class Product{

    static #base

    constructor(id, productName, price, description){
        this.id=id
        this.productName=productName
        this.price = price
        this.description = description
    }

    static getAll(){
        return this.#base
    }

    static add(product){
        this.#base.push(product)
    }

    static get base(){
        return this.#base 
    }

    static set base(base){
        this.#base =  base
    }
}

// adding default datas
Product.base = products

module.exports = Product