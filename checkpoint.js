const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

exports.checkPoint = async (req,res,next) => {
	if(!req.headers.authorization){return res.status(401).end()}
	try{

		let key = req.headers.authorization.split(' ')[1];
		const ticket = await client.verifyIdToken({
			idToken: key,
			audience: process.env.CLIENT_ID
		});
		const payload = ticket.getPayload();
		const userid = payload["sub"];
		req.user = payload;
		next();
	}
	catch(err){
		console.error(err);
		res.status(500).end();
	}
}