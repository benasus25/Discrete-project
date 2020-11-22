const express = require('express');
const bodyParser = require('body-parser');
const truth_value = require('./js/truth');

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('images'))

app.listen(3000);
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    //res.send('<p>hello</p>')
    res.sendFile('./views/home.html', {root: __dirname})
})
app.get('/home',(req, res)=>{
    //res.send('<p>hello</p>')
    res.sendFile('./views/home.html', {root: __dirname})
} )

//table generator
app.get('/table', (req, res)=>{
    res.sendFile('./views/table.html', {root:__dirname});
})

app.post('/table_content', urlencodedParser, (req, res)=>{
    answer = truth_value(req.body.expression);
    res.render('table_content', {answer: answer, expression: req.body. expression});
})
//time complexity
app.get('/aanalysis',(req, res)=>{
    res.sendFile('./views/aanalysis.html', {root: __dirname});
})
app.get('/thetano',(req, res)=>{
    res.sendFile('./views/thetano.html', {root: __dirname});
})
app.get('/bigono',(req, res)=>{
    res.sendFile('./views/bigono.html', {root: __dirname});
})
app.get('/omegano',(req, res)=>{
    res.sendFile('./views/omegano.html', {root: __dirname});
})

//search

app.get('/linearsearch',(req, res)=>{
    res.sendFile('./views/linearsearch.html', {root: __dirname});
})

app.get('/binarysearch',(req, res)=>{
    res.sendFile('./views/binarysearch.html', {root: __dirname});
})

//sorting
app.get('/selectionsort',(req, res)=>{
    res.sendFile('./views/selectionsort.html', {root: __dirname});
})

app.get('/bubblesort',(req, res)=>{
    res.sendFile('./views/bubblesort.html', {root: __dirname});
})

app.get('/insertionsort',(req, res)=>{
    res.sendFile('./views/insertionsort.html', {root: __dirname});
})

app.get('/mergesort',(req, res)=>{
    res.sendFile('./views/mergesort.html', {root: __dirname});
})

app.get('/countingsort',(req, res)=>{
    res.sendFile('./views/countingsort.html', {root: __dirname});
})


//divide and conquer


//graph
app.get('/dfs',(req, res)=>{
    res.sendFile('./views/dfs.html', {root: __dirname});
})

app.get('/prim',(req, res)=>{
    res.sendFile('./views/prim.html', {root: __dirname});
})

app.get('/kruskal',(req, res)=>{
    res.sendFile('./views/kruskal.html', {root: __dirname});
})

app.get('/warshall',(req, res)=>{
    res.sendFile('./views/warshall.html', {root: __dirname});
})

app.get('/bfs',(req, res)=>{
    res.sendFile('./views/bfs.html', {root: __dirname});
})


//tree operations
app.get('/inordertree',(req, res)=>{
    res.sendFile('./views/inordertree.html', {root: __dirname});
})

app.get('/searchtree',(req, res)=>{
    res.sendFile('./views/searchtree.html', {root: __dirname});
})
app.get('/inserttree',(req, res)=>{
    res.sendFile('./views/inserttree.html', {root: __dirname});
})
app.get('/deletetree',(req, res)=>{
    res.sendFile('./views/deletetree.html', {root: __dirname});
})
