const bodyParser = require ("body-parser")
const express = require ("express")
const app = express()
const cors = require('cors')
const massive = require('massive');
require('dotenv').config()
const ctrl = require('./controller') 
const port = process.env.PORT || 4000;

app.use(bodyParser.json)
app.use(cors)
app.use( express.static( __dirname + '/../public/build' ) );

// app.get('/api/product', controller.getProducts)





massive(process.env.CONNECTION_STRING).then(dbInstance=>
    {app.set('db',db)
    app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
   
   });