var express = require('express');
var router = express.Router();
var expressWs = require('express-ws')(router);

clients = [];

router.ws('/webcam', function(ws, req) {
    clients.push(ws);

    ws.on('message', function(msg) {
        for (var i = 1; i < clients.length; i++) {
            clients[i].send(msg);
        }
    });

    ws.on('close', function() {
        for (var i = 0; i < clients.length; i++) {
            if (clients[i] == ws) {
                clients.splice(i);
                break;
            }
        }
    });
});

module.exports = router;