const express=require('express')
const app=express();
const bodyParser=require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/Blood",function(err){
    if(err){
        console.log("Connecction Not Successful");
    }
    else{
        console.log("Connection Successful");
    }
})
const list=mongoose.model('donors',{name:String,mobile:Number,email:String,Age:Number,Gender:String,BloodGroup:String,Address:String});
const query=mongoose.model('ContactQuerys',{name:String,email:String,mobile:Number,message:String,postingdate:String,status:String});
const contactupdate=mongoose.model('Update',{address:String,email:String,contactnumber:Number});
const replace=mongoose.model('Modify',{data:String});
const appoint=mongoose.model('Appointment',{date:Date,time:String});
const amountblood=mongoose.model('QuanBlood',{bloodgroup:String,bloodquantity:Number});

app.post("/api/adddonor",function(req,res){
    var name=req.body.name
    var mobile=req.body.mobile
    var email=req.body.email
    var age=req.body.age
    var gender=req.body.gender
    var bloodgr=req.body.bloodgr
    var address=req.body.address
    var datadetail=new list({name:name,mobile:mobile,email:email,Age:age,Gender:gender,BloodGroup:bloodgr,Address:address})
    datadetail.save(function(err){
        if(err)
        {
            console.log("Data not addedd successful");
        }
        else
        {
            console.log("Data added successful");
        }
    })
})

app.post("/api/donordetail",function(req,res){
    list.find({},function(err,documents){
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(documents);
        }
        

    })
})

app.post("/api/searching",function(req,res){
    var bloodgroup=req.body.bloodgroup
    list.find({BloodGroup:bloodgroup},function(err,documents){
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.send(documents)
        }
    })
})

app.post("/api/contactadd",function(req,res){
    var name=req.body.name
    var email=req.body.email
    var phonenumber=req.body.phonenumber
    var message=req.body.message
    var dataquery=new query({name:name,email:email,mobile:phonenumber,message:message,postingdate:"12/10/22",status:"Pending"})
    dataquery.save(function(err){
        if(err)
        {
            console.log("Contact to the admin unsuccessful")
        }
        else
        {
            res.send("Contact Form Addedd Successfully")
        }
    })
})
app.post("/api/querydetail",function(req,res){
    query.find({},function(err,documents){
        if(err)
        {
            console.log("Data Not Send Successfully")
        }
        else
        {
            res.send(documents)
        }
    })
})

app.post("/api/updating",function(req,res){
    var address=req.body.address
    var email=req.body.emailid
    var contactnumber=req.body.contactnumber
    var changecontact=new contactupdate({address:address,email:email,contactnumber:contactnumber})
    changecontact.save(function(err){
        if(err)
        {
            console.log("Data Not addedd Successful")
        }
        else
        {
            console.log("Data nnot update Successfully")
        }
    })
})

app.get("/api/admincontact",function(req,res){
    contactupdate.find({},function(err,documents){
        if(err){
            console.log(err);
        }
        else
        {
            res.send(documents);
        }
    })
})

app.get("/api/datamodify",function(req,res){
    var editdata=req.body.editdata;
    var replacement=new replace({data:editdata})
    replacement.save(function(err){
        if(err){
            console.log("Data not addedd successfully");
        }
        else{
            console.log("Data addedd successfully");
        }
    })
})

app.get("/api/getdata",function(req,res){
    replace.find({},function(err,documents){
        if(err){
            console.log(err);
        }
        else
        {
            res.send(documents);
        }
    })
})

app.post("/api/postappointment",function(req,res){
    var date=req.body.date;
    var time=req.body.time;
    var newappoint=new appoint({date:date,time:time});
    newappoint.save(function(err){
        if(err){
            console.log("Appointment Not Successful");
        }
        else{
            console.log("Appointment Successful");
        }
    })
    appoint.find({},function(err,documents){
        if(err){
            console.log("Documents Not send successful");
        }
        else{
            res.send(documents);
        }
    })
})

app.post("/api/quantblood",function(req,res){
    var bloodgr=req.body.bloodgr;
    var Quantityblood=req.body.Quantityblood;
    const resblood=new amountblood({bloodgroup:bloodgr,bloodquantity:Quantityblood})
    resblood.save(function(err){
        if(err){
            console.log("Quantity Blood Does not to be added");
        }
        else{
            console.log("Data Added Successfully");
        }
    })
})
app.listen(7000,function(){
    console.log("Connections successful");
})