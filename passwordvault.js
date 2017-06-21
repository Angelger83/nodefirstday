console.log("Application is about to start");


 var storage = require('node-persist');

 storage.initSync();

 storage.setItemSync('myaccount', [
 	{
 		name:'admin',
 		accBalance: '1000'
 	},{
 		name:'Angel',
 		accBalance: '9000'
 	}
 	])


 var acc = storage.getItemSync('myaccount');

 console.log(acc);


 acc.push({name:'Sofia',
 		accBalance: '1000'});

 storage.setItemSync('acc', acc);

 console.log(acc);
