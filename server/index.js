const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller') ;

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use( express.static( __dirname + '/../public/build' ) );
const port = process.env.PORT || 4000;

app.get('/api/product/:productid',ctrl.getById);
app.get('/api/products',ctrl.getAll);




massive(process.env.CONNECTION_STRING).then(db=>
    {app.set('db',db)
    app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
   
   });