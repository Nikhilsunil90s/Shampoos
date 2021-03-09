const app = require('express').Router();

app.get('/',(req,res)=>{
    res.render('landingpage/landingpage');
})

module.exports = app;
