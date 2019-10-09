//set routes
const router = require('express').Router();
const http = require('http');

router.get("*", function (req, res) {
	res.status = 200;
	httpver(req, res);
})

// maybe not as pretty as fetch, axios, async request, but http gets job done without extra libraries
function httpver(req, res) {
	let resp = "Hello from " + req.client.remoteAddress + ":" + req.client.remotePort +
			   " to " + req.client.localAddress + ":" + req.client.localPort + "<br>";
	http.get('http://service2:8002/', (get) => {
		let data = '';

		// A chunk of data has been received.
		get.on('data', (chunk) => {
			data += chunk;
		});

		// The whole response has been received. Print out the result.
		get.on('end', () => {
			res.send(resp + data);
			res.end();
		});
	}).on("error", (err) => {
		resp += "No response from service2"
		res.send(resp);
		res.end();
	});
}

module.exports = router
