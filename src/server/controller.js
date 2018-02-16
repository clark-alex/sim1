module.exports = {
    getAll: (req, res, next) =>{
        const db = req.app.get('db')

        dbInstance.getProducts()
        .then((products)=> res.status(200).send(products))
        .catch(()=> res.status(500).send())
    }


}
