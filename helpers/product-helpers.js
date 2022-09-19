var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={
   
    addProduct:(product,Callback)=>{
    
    db.get().collection('product').insertOne(product).then((data)=>{
    Callback(data.insertedId)
    })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(products)
          
        })
    }
   

}
