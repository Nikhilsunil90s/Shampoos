const express = require('express');
const app=express();

const userRoutes = require('./routes/userRoutes');

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static('public'));

app.use(userRoutes);

app.listen(7000);