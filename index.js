//this file will only contain the logic to import ecpress and start the server on a port
const express = require('express') //importing express
const app = express() //storing express in a variable
app.listen(3000, () => { //to start the server on 3000 port
    console.log("server started on 3000 port");
})