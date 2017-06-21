var request = require('request');


module.exports = function (location, callback) {
	return new Promise(function(resolve, reject){ 
	var el = encodeURIComponent(location);
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+el+"&appid=b3aaa0b3323c0baab93aff38f75b44cb&units=metric"
	if (!location){
		return reject('No location provided');
	}

	
		request({
		url:url,
		json: true
	}, function (error, response, body) {
		if (error) {
			reject('Unable to get the error')
		}else {
			resolve('its ' + body.main.temp + ' in ' + body.name);
		}
	});
	});



	}
