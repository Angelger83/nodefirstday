var express = require('express');
var bp = require('body-parser');
var middlewares = require('./middleware.js');
var _ = require('underscore');

var app = express();



app.use(express.static('public'));
app.use(bp.json());
/*app.use(middlewares.logging);
app.use(middlewares.globalstuff);*/

app.get('/', (req,res) => {
	res.send('welcome to express root');
})
var taskid=1;
var myPendings=[]


app.get('/getmypendings', (req, res) =>{
	res.json(myPendings);
})

app.get('/getmypendings/:id', function(req,res) {

	var tid = parseInt(req.params.id,10);
	var matched = _.findWhere(myPendings,{id:tid});

	if (matched) {
		res.json(matched)
	}else {
		res.status(404).send();
	}
})

app.post('/postmypendings', middlewares.addid, (req,res) =>{

var body = req.body
body.id =  id;
myPendings.push(body)
res.json(body);
})


/*app.get('/about', middlewares.requireAuth, (req,res) =>{
	res.send('welcome to about');
})

app.get('/aboutUs', (req,res) =>{
	res.send('welcome to aboutUs');
})

app.get('/contactUs', middlewares.contacting, (req,res) =>{
	res.send('welcome to Contact US');
})*/

app.listen(3000, ()=>{
	console.log( 'Server is running 100%');
})

