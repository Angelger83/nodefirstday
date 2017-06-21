var weather = require('./weather.js');
var location = require('./location.js');


var argv = require('yargs')
.option(
	city: {
		demand: true,
		alias: 'c`',
		description: 'Type your location',
		type: 'string'
}).help('help').argv;

if(typeof argv.c === 'string' && argv.c.length > 0){
	console.log('location is provided')
	weather(arg.c, then(function(cw){
		console.log(cw);
	});
} else {
location(). then(function (location) {
		weather(location.city, function(cw){
			console.log(cw);
		});
	}else {
		console.log('Unable to guess location');
	}
})

}





