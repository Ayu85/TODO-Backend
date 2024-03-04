//this file will only contain the logic to import ecpress and start the server on a port
const express = require('express')
const app = express()
app.listen(3000, () => {
    console.log("server started on 3000 port");
})