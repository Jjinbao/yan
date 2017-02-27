var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var http = require('http');
var querystring = require('querystring');
var sql = require('../logic/operate-databases');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('hello world!')
});

router.get('/test/list', function (req, res) {
    var v4UUid = uuid.v4();
    var sqlStr = 'insert into uuid(uuid) values("' + v4UUid + '")';
    sql.insert(sqlStr, function (result) {
        res.send('hello world');
        res.end();
    })

})

router.get('/iyuba', function (req, res) {
    console.log('-------1------')
    var postData = {

            params:{
                phone: '18210596067',
                password: 'qqqqqq'
            }


    };

    var options = {
        host: '123.57.225.89',
        port: 80,
        path: '/sxtx/mobile/login/loginByPwd',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(postData)
        },
        data:postData
    };
    var myReq = http.request(options, function (res) {
        res.setEncoding('utf8');
        var resData = "";
        res.on("data", function (data) {
            console.log(data);
            resData = data;
        });
        res.on("end", function () {
            console.log('-------2------');
            callback(resData);
        });
    });
    console.log(postData);
    //myReq.write(JSON.stringify(postData));
    myReq.end();
    function callback(data) {
        res.send(data);
        res.end();
    }
})

router.get('/delete', function (req, res) {
    var sqlStr = 'delete from uuid where id > 99';
    sql.delete(sqlStr, function (val) {
        res.send(val);
        res.end();
    })
})

module.exports = router;
