var express = require('express');
var path = require('path');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/list', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/search', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/applications', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/logout', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/login', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});
app.get('/setting/*', function(req, res) {
    res.sendFile(path.resolve('build/index.html'))
});

app.use(express.static('build'));

app.listen(8080, function(){
    console.log('React Intl Example server listening at: http://localhost:8080');
});
