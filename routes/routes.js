module.exports =app=>{
    var controller=require('../controller/controller.js');
    var router=require('express').Router();
    router.post('/insert',controller.insertemp);
    router.get('/view/:id',controller.viewbyid);
    router.get('/view',controller.view);
    router.get('/delete/:id',controller.delete);
    router.post('/update',controller.update);
    app.use('/emp',router);
}