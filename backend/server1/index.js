'use strict';
const app = require('express')();
const http = require('http');

var serverPort = 8001;

// Add CORS headers
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*' /*allowed urls here*/);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Accept, api_key, Authorization, Content-Type, Origin, X-Requested-With');

	// Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	if (req.method === "OPTIONS") {
		res.status = 200;
		res.end();
	}
	else {
		next();
	}
});

app.use(require("./routes/routes.js"))

// Start the server
http.createServer(app).listen(serverPort, function () {
	console.log('Your server is listening on port %d ', serverPort);
});
