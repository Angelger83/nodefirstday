var taskid =1; 


var middleware = {
	requireAuth: function (req,res,next){
		console.log('auth interceptor invoked');
		next();
	},
	logging: function (req,res,next){
		console.log('Request' + new Date().toString() + ' ' +req.method + ' '+req.originalUrl);
		next();
	},
	contacting: function(req,res,next){
		console.log('Contacting is invoked')
		next();
	},
	globalstuff: function(req,res,next){
		console.log('Global stuff');
		next();
	},
	addid: function(req,res,next){
		id = taskid++;
		next();
	}
}


module.exports = middleware;
