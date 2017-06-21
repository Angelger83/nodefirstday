var argv = require ('yargs').argv;
var command = argv._[0];
	console.log (argv);


	if (typeof argv.name !== 'undefined' && typeof argv.city !== 'undefined' && typeof argv.country !== 'undefined') {
		console.log (argv);
	}

	if (typeof argv.name !== 'undefined' && typeof argv.city !== 'undefined') {
		console.log ('name ' + argv.name + 'and city ' + argv.city);	
	}

	if (typeof argv.name !== 'undefined') {
		console.log ('city ' + argv.city);
	}


