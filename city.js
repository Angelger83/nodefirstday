var storage = require('node-persist');

 storage.initSync();




function confirmpassword (email,city){
	var accounts = storage.getItemSync('accounts');
	 acc.push({
	 email:'test@tst.com',
 	 city: 'San Jose'
 	})
 	storage.setItemSync('accounts', acc);
}

function getCity (CityName) {
	var city = storage.getItemSync('accounts');
	var matchedCity;

	city.forEach(function (name) {
		if (city.city === CityName) {
			matchedCity = account;
		}
	});

	return matchedCity;
}

var CitySearch = getCity('San Jose');
console.log(CitySearch);




