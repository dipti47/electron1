"USE STRICT";
app.factory("dbService", function($http){
	var sqlite = require('sqlite-sync');
	var db = sqlite.connect(path.join(__dirname,'model/database.db'));
	return db;
});
/*
app.factory("dbService1", function($http){
	var file1 = "model/DbProgressivoNegozio.db";
	var db1 = new sqlite3.Database(file1);
	return db1;
});

app.factory("dbService2", function($http){
	var file2 = "model/DbParametri.db";
	var db2 = new sqlite3.Database(file2);
	return db2;
});


app.factory("dbService3", function($http){
	var sqlite3 = require('sqlite-sync');
	var file3 = "model/DbAnagrafica.db";
	var db3 = sqlite3.connect(file3);
	return db3;
});

app.factory("dbService4", function($http){
	var sqlite4 = require('sqlite-sync');
	var file4 = "model/DbComanda.db";
	var db4 = sqlite4.connect(file4);
	return db4;
});

app.factory("dbService5", function($http){
	var sqlite5 = require('sqlite-sync');
	var file5 = "model/DbInventario.db";
	var db5 = sqlite5.connect(file5);
	return db5;
});

app.factory("dbService6", function($http){
	var sqlite6 = require('sqlite-sync');
	var file6 = "model/DbPromo.db";
	var db6 = sqlite6.connect(file6);
	return db6;
});

app.factory("dbService7", function($http){
	var sqlite7 = require('sqlite-sync');
	var file7 = "model/DbScontrini.db";
	var db7 = sqlite7.connect(file7);
	return db7;
});
*/

