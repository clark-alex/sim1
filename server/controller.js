module.exports = {
    getById: (req, res, next) => {
        const db = req.app.get('db')

        db.getProduct([req.params.productid])
        .then((product)=> res.status(200).send(product))
        .catch(()=> res.status(500).send())
    },
    getAll: (req, res, next) =>{
        const db = req.app.get('db')
      
         db.getAll()
        .then((products)=> res.status(200).send(products))
        .catch(()=> res.status(500).send())
    }
 



}
