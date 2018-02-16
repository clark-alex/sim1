module.exports = {
    // getById: (req, res, next) =>{
    //     const db = req.app.get('db')
    //     console.log("2",db)

    //     db.getProduct([req.params.productid])
    //     console.log("hello",req.params.productid)
    //     .then((product)=> res.status(200).send(product))
    //     .catch(()=> res.status(500).send())
    // }
    // getOne: (req, res, next) =>{
    //     const dbInstance = req.app.get('db')

    //     dbInstance.getAll([req.params.id])
    //     .then((product)=> res.status(200).send(product))
    //     .catch(()=> res.status(500).send())
    // },
    getAll: (req, res, next) =>{
        const db = req.app.get('db')
        console.log(db);
        

        db.getAll()
        console.log("hello")
        .then((products)=> res.status(200).send(products))
        .catch(()=> res.status(500).send())
    },


}
