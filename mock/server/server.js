let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let indexRoutes = require('./routes/index');

let port = 7000;
let delay = 350;

let app = express();

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	setTimeout(next, delay);
});

app.use(function(req, res, next) {
	const allowedOrigins = [
		'http://localhost:3000',
	];
	const origin = req.headers.origin;

	if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
	}

	res.header('Access-Control-Allow-Credentials', 'true');

	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, PUT, DELETE');

	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use('/', indexRoutes);

app.listen(port);
