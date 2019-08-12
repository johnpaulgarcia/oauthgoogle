const router = require('express').Router();
router.route('/')
	.post((req,res,next)=>{
		req.app.io.sockets.emit("test","Connected Affirmative")
		res.send(req.user);
	})

module.exports = router;