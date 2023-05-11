const express = require('express');
const app = express()

app.use(express.json());

app.get('/',(request, response)=>{
    response.send({message:"API V-0.1"})
})

module.exports = app ;
