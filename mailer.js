var express = require('express');
var app = express();
var sendmail = require('sendmail')({silent: true});

app.configure(function () {
    app.use(express.bodyParser());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'cool beans'}));
    app.use(express.methodOverride());
});

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, ' +
        'x-parse-session-token');
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
});

function sendMail(req, res) {
    var errorMessage;
    for (var key in req.body) {
        if (req.body[key] == '') {
            errorMessage = key + ' should not be blank';
            break;
        }
    }
    if (errorMessage) {
        res.send(errorMessage)
    } else {
        sendmail({
            from: req.body.sender,
            to: req.body.reciepant,
            subject: req.body.subject,
            html: req.body.body
        }, function (err, reply) {
            if (err) {
                res.send('Error', err)
            } else {
                res.send('Info sent successfuly')
            }
        });
    }
}

app.post('/sendMail', function (req, res) {
    sendMail(req, res)
});

app.listen(8000, function () {
    console.log('app listening the port 8000');
});