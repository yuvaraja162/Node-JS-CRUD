const employeemodel=require('../models/models.js');


//insert 

exports.insertemp=(req,res)=>{
    const emp=new employeemodel({
        emp_name :req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation
    });
   // console.log(emp);

    employeemodel.insert(emp,(err,data)=>{
        if(err)
            res.json({Status:0, Message:"Error while inserting.."} );
        else if(data>0)
            res.json({Status:1, Message:"Inserting Succe    ssfully"} );
        else
            res.json({Status:0, Message:"Failed to inserting.."} );
               
    });
}

//view by id
exports.viewbyid=(req,res)=>{
        const emp=new employeemodel({
            emp_id: req.params.id

        });
      // console.log(emp);
        
    employeemodel.viewbyid(emp,(err,data)=>{
           // console.log(data);
        if(err)
            res.json({Status:0, Message:"Can't Show the Details"} );
        else
            res.json({data});
       
    });

}

//view
exports.view=(req,res)=>{
    employeemodel.view((err,data)=>{
        console.log(data);
        if(err){
            res.json({Status:0, Message:"Can't Show the Details"} );

        }else{
            res.json({data});

        }
    });
}

//delete
exports.delete=(req,res)=>{
    const emp=new employeemodel({
        emp_id: req.params.id

    });
  // console.log(emp);
    
employeemodel.deletebyid(emp,(err,data)=>{
       // console.log(data);
    if(err)
        res.json({Status:0, Message:"Can't Delete the Details"} );
    else
        res.json({Status:1, Message:"Deteled.."});
   
});

}

//update

exports.update=(req,res)=>{
    const emp=new employeemodel({
        emp_id :req.body.emp_id,
        emp_name :req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation

    });
  // console.log(emp);
    
employeemodel.update(emp,(err,data)=>{
       // console.log(data);
    if(err)
        res.json({Status:0, Message:"Can't Update the Details"} );
    else
        res.json({Status:1, Message:"updated successfully.."});
   
});

}
