const express=require('express')
const http=require('http')
const app=express();



//check the appliction
app.get('/',function(req,res)
{
    res.send('Hello world')
})

http.createServer(app.listen(4002));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./routes/routes.js')(app);



