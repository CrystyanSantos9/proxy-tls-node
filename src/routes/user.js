const express = require('express');
const router = express.Router();
 
 
 
router.get('/', (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
  
   const remoteIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
   
   const clients = [
       {
     name: 'Paulo xuxa da silva',
     age: '135',
     region: 'BRAZIL'
   },
   {
       name: 'Eliana da silva',
       age: '140',
       region: 'BRAZIL'
     },
 
   ]
    res.statusCode = 200
   res.send({
     success: true,
     clients,
     remoteAddress: remoteIP
   });
 
 });
 
 
 router.get('/queries/getUser', (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
  
   const remoteIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
 
   const client = {
     name: 'Paulo xuxa da silva',
     age: '135',
     region: 'BRAZIL'
   }
    res.statusCode = 200
   res.send({
     success: true,
     client,
     remoteAddress: remoteIP
   });
 });
 
 
 router.post('/queries/getUser', (req, res) => {
   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5500')
  
   const remoteHeaders = req.headers
   const remoteIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
 
   // const { name, age } = req.body
  
   // let client = {
   //   name: name,
   //   age: age,
   //   region: 'BRAZIL'
   // }
 
   respDTO = {
     success: true,
     headers: remoteHeaders,
     content: req.body,
     remoteAddress: remoteIP
   }
    console.log(respDTO)
  
   res.statusCode = 201
   res.send(respDTO);
 });
 
module.exports = router;
