var express = require('express'),
	app = express(),
	cons = require('consolidate'),
	port = process.env.PORT || 3000;

app.configure(function(){
	app.use(express.static(__dirname + '/public'));
	app.engine('html', cons.handlebars);
});

app.get('/', function(req, res){
	res.render('index.html', {
		firstName: 'Reed',
		lastName: 'Rizzo'
	});
});

app.listen(port);

console.log('------------ Node Template Started ------------');
console.log('Express app started on port ' + port);
console.log('Running at http://localhost:' + port);
console.log('-----------------------------------------------');

