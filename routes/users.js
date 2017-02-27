var express = require('express');
var http = require('http');
//var querystring = require('querystring');
var router = express.Router();
var useSql = require('../logic/operate-databases');
var config = require('../config/config');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res) {
    console.log(req.body);
    var user = req.body.name;
    var password = req.body.password;
    var sql = 'select * from user_common where phone = "' + user + '"';
    useSql.select(sql, function (row) {
        var resData = {
            data: {},
            code: '',
            message: ''
        }
        if (row && row[0].password == password) {
            resData.data = row[0];
            resData.code = config.success.code;
            resData.message = config.success.message;
            res.send(resData);
            res.end();
        } else {
            resData.code = config.fail.code;
            resData.message = config.fail.message;
            res.send(resData);
            res.end();
        }
    });

});

module.exports = router;
