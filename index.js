require('dotenv').config();
const app = require('express')();
const server = require('http').Server(app);
const router = require('./routes');
const {checkPoint} = require('./checkpoint');
const io = require('socket.io')(server);
const cors = require('cors');
let PORT = process.env.PORT || 1234;
server.listen(PORT,()=>console.log(`Listening on ${PORT}`));
app.io = io;
app.use(cors());
io.on('connection',(socket)=>{
		console.log("Connected to websocket!");
	});
app.use(checkPoint);
app.use(router);


