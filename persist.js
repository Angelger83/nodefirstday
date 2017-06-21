var storage= require('node-persist');
var crypto = require('crypto-js');

storage.initSync();

var argv = require('yargs')
	.command('createUser', 'create a new account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (e.g Twitter or Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account name or user name',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Account Password',
				type: 'string'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master Password',
				type: 'string'
			}
		}).help('help');
	})
.command('get', 'Get an existing account', function(yargs){
	yargs.options({
	name: {
				demand: true,
				alias: 'n',
				description: 'Account name',
				type: 'string'
			} ,
	masterPassword: {
				demand: true,
				alias: 'm',
				description: 'Master Password',
				type: 'string'
			} 
	 
}).help('help');
}).help('help')
	.argv;
var command = argv._[0];

function getAccounts(masterPassword){
	var em = storage.getItemSync('accounts');
	var accounts = [];
	if (typeof em !== 'undefined') {
		var bytes = crypto.AES.decrypt(em, masterPassword);
		accounts - JSON.parse(bytes.toString(crypto.enc.Utf8));
	}

	return accounts;
}


function saveAccounts (accounts, masterPassword) {
	var ea = crypto.AES.encrypt(JSON.stringify(accounts),masterPassword);
	storage.setItemSync('accounts', ea.toString());
	return accounts;
}

 function createAccount(account, masterPassword) {
	 var accounts = getAccounts(masterPassword);	
	 accounts.push(account), 
	 saveAccounts(accounts,masterPassword);
	 return account;
 }

 function getAccount(accountName, masterPassword) {

	 var accounts = getAccounts(masterPassword);
	 var matchedAccount;

	 accounts.forEach(function (account){
		 if( account.name === accountName){
			 matchedAccount = account;
		 }
	 });

	 return matchedAccount;

 }

 if(command === 'createUser') {
 	try {
	 var createdAccount = createAccount({
		 name : argv.name,
		 username:argv.username,
		 password:argv.password
	 },argv.masterPassword);
	 console.log('Account created');
	 console.log(createdAccount);
	} catch (e) {
		console.log ('unable for fetch data');	
	}
 } else if( command === 'get') {
	 try {

	 var fetchedAccount = getAccount(argv.name, argv.masterPassword);
	 if( typeof fetchedAccount === 'undefined') {
		 console.log('Account not found');

	 } else {
		 console.log('Account Found');
		 console.log(fetchedAccount);
	 }
 } catch (e) {
 	console.log(' unable to fetch data');
 }
}

debugger;
