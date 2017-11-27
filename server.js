const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', require('./api/index'));


app.get('*', function (req, res){
    console.log('there is request comming');
    res.sendFile(path.join(__dirname, 'dist/index.html'),{
        new:{"n":1}
    });
});

const server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log('Running ... http://localhost%s', host, port);
})