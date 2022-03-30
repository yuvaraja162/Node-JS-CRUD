const mysql=require('mysql')


//connect with database
var con=mysql.createConnection(
  {
    host:'localhost',
    user:'root',
    password:'',
    database:'nodejsdb'
  }
);

con.connect(function(err){
  if(err){
    console.error('error connecting:'+err.stack);
    //if the error occurs this case will be executed
    return;
  }
  console.log('connected');
  //if connection established this will be print
});

module.exports=  con;