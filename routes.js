const router = require('express').Router();
router.route('/')
	.get((req,res,next)=>{
		req.app.io.sockets.emit("test","Connected Affirmative")
		res.send({data: 'json'});
	})

module.exports = router;