const express = require('express')
const app = express()

// Use Path
const path = require('path')

// Use Body-Parser
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use('/',express.static(path.join(__dirname,'static')))

// push Data & Import pushData Router
const validation = require('./routes/validation')
app.use('/validation',validation)


app.listen(3000,()=>console.log('Listening to PORT 3000'))