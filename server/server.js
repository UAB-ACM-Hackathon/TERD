Array.prototype.contains = function(needle) {
	for (i in this) {
		if (this[i] == needle)
			return true;
	}
	return false;
}







var matchmaker = require('socket.io').listen(8080);

var connected_players = [];
var waiting_players = [];
var ready_count = 0;

setTimeout(function() {
	if (ready_count >= 2) {
		var p1 = waiting_players.pop();
		var p2 = waiting_players.pop();
		var random_port = Math.floor(Math.random() * (9999 - 8081 + 1)) + 8081;
		p1.emit("match server", { port: random_port });
		p2.emit("match server", { port: random_port });
		hostMatch(p1, p2, random_port);
	}
}, 1000);

matchmaker.sockets.on('connection', function (socket) {
	socket.emit('connected', { message: 'confirmed' });
	socket.on('ok', function(data) {
		connected_players.push(socket);
	});
	socket.on('ready', function(data) {
		ready_count += 1;
		waiting_players.push(socket);
	});
	socket.on('disconnect', function() {
		connected_players.remove(socket);
		if (waiting_players.contains(socket)) {
			waiting_players.remove(socket);
			ready_count -= 1;
		}
	}
});

function hostMatch(p1, p2, port) {
	var match = require('socket.io').listen(port);
	var connect_count = 0;
	var p1;
	var p2;
	match.sockets.on('connection', function (socket) {
		if (p1 == undefined) {
			p1 = socket;
		} else {
			p2 = socket;

			match.sockets.emit("START");
		}
	}
}
