var express = require('express');
var router = express.Router();
var uuid=require('node-uuid');
var sql=require('../logic/operate-databases');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello world!')
});

router.get('/test/list',function(req,res){
  var v4UUid=uuid.v4();
  var sqlStr='insert into uuid(uuid) values("'+v4UUid+'")';
  sql.insert(sqlStr,function(result){
    res.send('hello world');
    res.end();
  })

})

router.get('/delete',function(req,res){
  var sqlStr='delete from uuid where id > 99';
  sql.delete(sqlStr,function(val){
    res.send(val);
    res.end();
  })
})

module.exports = router;
