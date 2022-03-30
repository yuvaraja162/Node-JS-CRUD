const db=require('../db/db.js');

const employeeModel=function(employeemodel)
{
   this.emp_id = employeemodel.emp_id;
    this.emp_name = employeemodel.emp_name;
    this.emp_phone = employeemodel.emp_phone;
    this.emp_email = employeemodel.emp_email;
    this.emp_dob = employeemodel.emp_dob;
    this.emp_address = employeemodel.emp_address;
    this.emp_dept = employeemodel.emp_dept;
    this.emp_designation = employeemodel.emp_designation
}

//for inserting
employeeModel.insert=(value,result)=>{
    var sqlquery=`INSERT INTO emp_users(emp_id,emp_name, emp_phone, emp_email, emp_dob, emp_dept, emp_designation, emp_address) VALUES
     (null,'${value.emp_name}','${value.emp_phone}','${value.emp_email}',
     '${value.emp_dob}','${value.emp_dept}','${value.emp_designation}','${value.emp_address}')`;
    console.log(sqlquery);
   db.query(sqlquery,(err,res)=>{
     
    if(res.affectedRows>0){
        result(null,res.affectedRows);
    }else{
        result(null,res.affectedRows);
    }

   });
}

//update
employeeModel.update=(value,result)=>{
  var sqlquery=`UPDATE emp_users SET emp_name='${value.emp_name}', emp_phone='${value.emp_phone}', emp_email='${value.emp_email}', emp_dob='${value.emp_dob}', emp_dept='${value.emp_dept}', emp_designation='${value.emp_designation}', emp_address='${value.emp_address}'WHERE emp_id=${value.emp_id}`;   
    console.log(sqlquery);
   db.query(sqlquery,(err,res)=>{
     
    if(res.affectedRows>0){
        result(null,res.affectedRows);
    }else{
        result(null,res.affectedRows);
    }

   });
}

//for viewbyid

employeeModel.viewbyid=(value,result)=>{
    //console.log(value.emp_id);
    var sqlQuery = `SELECT * FROM emp_users WHERE emp_id=${value.emp_id}`;
   // console.log(sqlQuery);
  db.query(sqlQuery,(err,res)=> {
     if(err)
        console.log(err);
      else
      result(null,res);
    //console.log(res);
});
}
//view
employeeModel.view=(result)=>{
    var sqlQuery = `SELECT * FROM emp_users`;
    db.query(sqlQuery,(err,res)=>{
        //console.log(res);
        if(err){
            console.log(err);
        }else{
            result(null,res);
        }
    });
    
}

//for delete 
employeeModel.deletebyid=(value,result)=>{
    //console.log(value.emp_id);
    var sqlQuery = `DELETE FROM emp_users WHERE emp_id=${value.emp_id}`;
    //console.log(sqlQuery);
  db.query(sqlQuery,(err,res)=> {
     if(err)
        console.log(err);
      else
        result(null,res);
    //console.log(res);
});
}



module.exports =employeeModel;