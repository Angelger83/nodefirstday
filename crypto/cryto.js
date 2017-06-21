var crypto = require ('crypto-js');

var secretMessage = {
	name:  'Admin',
	secretName: 'secret007'
};

var secretKey = '123abc';

var em = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted message '+ em);


var bytes = crypto.AES.decrypt(em,secretKey);

var dm = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log(dm);