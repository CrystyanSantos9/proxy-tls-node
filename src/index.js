'use strict';
 
const express = require('express');
const cors = require('cors')
var logger = require('morgan');
const helmet = require('helmet')

 
 
// Constants
const PORT = process.env.PORT || 3005;
const HOST = process.env.HOST || '0.0.0.0';
 
 
// App
const app = express();
 
//ROUTES
const userRoutes = require('./routes/user')
// app.options('/', (req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
//     res.setHeader('Access-Control-Allow-Headers', ['client_id', 'Content-Type'])
//     res.send(true);
//   });
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
//segurança
app.use(helmet())
//Libera pedidos de todos
app.use(cors())
 
 
app.get('/', (req, res) => {
 // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
 const remoteHeaders = req.headers
 const remoteIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
 const contentEnconding = req.acceptsEncodings()
 const contentType = req.get('Content-Type')
 
 const respDTO = {
   succes: true,
   headers: remoteHeaders,
   remoteAddress: remoteIP
 }
 
 // console.log(respDTO)
 // console.log(req.body)
 console.table(contentEnconding)
 
 res.send(respDTO);
});
 
app.use('/user', userRoutes)
 
app.use((error, req, res, next)=>{
 console.log('error middleware')
 console.log(error)
 res.sendStatus(500)
})
 
 
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// const express = require('express');
// const https = require('https');

// const port = 3005;
// const HOST = '0.0.0.0';

// const options = { };

// const app = express();

// app.get('/user', (req, res) => {
//     res.status(200)
//         .json(`Hello ${req.header("ssl_client")}, your certificate was issued by ${req.header("SSL_Client_Issuer")}!`);
// });

// https.createServer(options, app).listen(port, () => {
//     console.log(`.. server up and running and listening on ${port} ..`);
// });