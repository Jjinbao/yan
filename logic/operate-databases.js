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
    //��ѯ
    select:function(sql,callback){
        connection.query(sql,function(err,rows){
            if(err){
                throw err;
            }else{
                //�ص�����
                callback(rows);
            }
        });
    },
    //����
    insert:function(sql,callback) {
        connection.query(sql,function(err,result){
            if(err){
                throw err;
            }else{
                //�ص�����
                callback(result);
            }
        });
    },
    //�޸�
    update:function(sql,callback){

    },
    //ɾ��
    delete:function(sql,callback){
        connection.query(sql,function(err,result){
            if(err){
                throw err;
            }else{
                //�ص�����
                callback(result);
            }
        });
    }
}