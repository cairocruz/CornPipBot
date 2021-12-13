const express = require('express')
const cors = require('cors')
const app = express();

const port = 8085;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('./routes'))

app.listen((process.env.PORT || port), function(){
    console.log('listening on *:'+ port);
});