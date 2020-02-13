let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');

router.get('/', (req, res) => {
	res.send('Welcome to the mocked service! Look into mock/server.js and mock/routes.js to see the available endpoints.');
});

router.get('/health-check', (req, res) => {
	res.send('OK');
});

router.get('/person/:input', (req, res) => {
	// req.params.input
	const task11FilePath = path.join(__dirname, '../data/task-1-1.json');
	fs.readFile(task11FilePath, (err, data) => {
		res.status(200).send(JSON.parse(data));
	});
});

router.get('/facility/:person', (req, res) => {
	// req.params.person
	const task12FilePath = path.join(__dirname, '../data/task-1-2.json');
	fs.readFile(task12FilePath, (err, data) => {
		res.status(200).send(JSON.parse(data));
	});
});

router.get('/exposure/:facility', (req, res) => {
	// req.params.facility
	const task13FilePath = path.join(__dirname, '../data/task-1-3.json');
	fs.readFile(task13FilePath, (err, data) => {
		res.status(200).send(JSON.parse(data));
	});
});

module.exports = router;
