 var express = require('express');
 var socket = require('socket.io');
 var app=express();
 var PORT = process.env.PORT || 4000;
 var server = app.listen(PORT,() => console.log('server start'));

 app.use(express.static('public'));


 var io = socket(server);

 io.on('connection', function(socket){
 	console.log('connection made successfully',socket.id);

 	socket.on('chat',function(data){
		io.sockets.emit('chat',data);
	});

	socket.on('typing',function(data){
		socket.broadcast.emit('typing',data);
	});


 });