//set routes
const router = require('express').Router();

router.get("*", function (req, res) {
	res.status = 200;
	res.send("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort + " to " + req.client.localAddress + ":" + req.client.localPort);
	res.end();
})

module.exports = router
