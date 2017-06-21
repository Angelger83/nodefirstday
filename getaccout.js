function createaccount (a, b) {
	acc.push({name:a,
 		email: b});
		storage.setItemSync('myaccount', acc);
}