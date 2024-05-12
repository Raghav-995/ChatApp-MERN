const express = require('express');
require('dotenv').config();

var cors = require('cors');

const  chats = require('./datamodel/data');
const data = require('./datamodel/gpt');

var app = express();

app.use(cors());

var port = process.env.PORT;

app.listen(port,(req,res)=>{
    
    console.log(`Server connected to Port ${port}`);
});

app.get('/',(req,res)=> {
    res.send(`<h1>Hello from the Express Server ${PORT}</h1>`);
})
app.get('/apis/chat',(req,res)=>{
   
    res.send(JSON.stringify(chats));
    
});

app.get('/apis/chat/:id',(req,res) => {
   
   const chat = chats.find((chats)=> chats._id === req.params.id);

   if(chat)
   res.send(chat);

   else
   res.send(`<h1>Chat by id ${req.params.id} not found</h1>`);
   
    
});

app.get('/apis/data',(req,res)=>{
   
    res.send(JSON.stringify(data));
    
});