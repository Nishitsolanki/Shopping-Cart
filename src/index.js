const express = require('express');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();
const multer = require("multer")
mongoose.set('strictQuery', true)

app.use(express.json());

mongoose.connect("mongodb+srv://PrachiRakhonde:TidE9uPBxvyZRFOn@cluster0.vdm2ccj.mongodb.net/group27Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected on 3000"))
.catch(err => console.log(err))

app.use(multer().any())

app.use('/', route);

app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
}) 