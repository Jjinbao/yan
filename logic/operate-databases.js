var mysql=require('mysql');

var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'line_user'
    }
);

module.exports={
    //查询
    select:function(sql,callback){
        connection.query(sql,function(err,rows){
            if(err){
                throw err;
            }else{
                //回调函数
                callback(rows);
            }
        });
    },
    //插入
    insert:function(sql,callback) {
        connection.query(sql,function(err,result){
            if(err){
                throw err;
            }else{
                //回调函数
                callback(result);
            }
        });
    },
    //修改
    update:function(sql,callback){

    },
    //删除
    delete:function(sql,callback){
        connection.query(sql,function(err,result){
            if(err){
                throw err;
            }else{
                //回调函数
                callback(result);
            }
        });
    }
}