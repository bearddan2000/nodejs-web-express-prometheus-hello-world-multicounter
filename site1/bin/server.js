'use strict';
var app = require('express')();
var server = require('http').Server(app);
const client = require("prom-client");
const metrics = require('./metrics');

app.get('/test', function(req, res) {
    metrics.visit(req.route.path);
    res.send('hello world from: ' + req.route.path);
});

app.get('/test1', function(req, res) {
    metrics.visit(req.route.path);
    res.send('hello world from: ' + req.route.path);
});

app.get('/test2', function(req, res) {
    metrics.visit(req.route.path);
    res.send('hello world from: ' + req.route.path);
});

app.get('/metrics', function(req, res) {
    res.send(client.register.metrics());
});

server.listen(8000);
