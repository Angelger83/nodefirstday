var express = require('express');
var bp = require('body-parser');
var _ = require('underscore');
var MongoClient = require ('mongodb').MongoClient;

var app = express();

app.use(bp.json());

var db

MongoClient.connect('mongodb://admin:admin@ds133192.mlab.com:33192/angeldb', (err,database) => {
	if (err) return console.log(err)
	db = database;
})


app.post('/postmydata', (req,res)=> {
	db.collection('employeedb').save(req.body,(error,result)=> {
		if (error) return console.log(err)
		console.log('record inserted');
		res.json(req.body);
	})
})

app.delete('/deletemydata', (req,res)=> {
	db.collection('employeedb').findOneAndDelete({name:req.body.name},(error,result)=> {
		if (error) return console.log(err)
		console.log('record deleted');
		res.json(req.body);
	})
})

app.put('/updatemydata', (req,res)=> {
	db.collection('employeedb').findOneAndUpdate({name:req.body.name},{
		$set: {
			name: req.body.name,
			email:req.body.email,
			salary:req.body.salary,
			department:req.body.department
		}

		},
		{
			sort: {_id: -1},
			upsert:true
		}, (err,result) => {
			if (err) return onsole.log(err)
			res.send(result);
	})
})

app.get('/getmydata', (req,res)=> {
	db.collection('employeedb').find().toArray((error,result)=>{
		if (error) return console.log(err)
		console.log('get All');
		res.json(result);
	})
})

app.listen(3000,()=>{
	console.log('server is ready');
})