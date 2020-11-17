const express = require('express');
const bodyParser = require('body-parser');
const truth_value = require('./js/truth');

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(3000);
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.send('<p>hello</p>')
    res.sendFile('./views/home.html', {root: __dirname})
})

app.get('/table.html', (req, res)=>{
    res.sendFile('./views/table.html', {root:__dirname});
})

app.post('/table.html', urlencodedParser, (req, res)=>{
    answer = truth_value(req.body.expression);
    res.render('table_content', {answer: answer, expression: req.body. expression});
})
