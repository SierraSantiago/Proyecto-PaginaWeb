const express=require('express');
const app=express();
const port=3100;
const path=require('path');
const bp = require('body-parser');
const methodOverride = require('method-override')
const mainRouter = require('./routes/main');

const rutaAbsoluta='./views/';
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(bp.json())

app.use(bp.urlencoded({ extended: true }))



app.use('/',mainRouter);
app.listen(port, ()=>console.log("funcionando en localhost:"+port));