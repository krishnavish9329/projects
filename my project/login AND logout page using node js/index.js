const mysql = require("mysql");
const express = require('express');
const bodyParser = require('body-parser');
const con=require('./mysql')

const app = express();

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+`/html/index.html`);
})

app.post('/',(req,res)=>{
    let email=req.body.email;
    let pass=req.body.password;
    console.log(email + pass);

    con.connect((error)=>{ 
        if(error) console.log(error);
        console.log('connect1');

        let sql=`select * from login where Username='${email}'`;
        con.query(sql,(er,result)=>{
            if(er) 
            {
                res.write('<h1>wrong email </h1>')
                //throw er;
            }
            else
            try{
                //console.log("successful data");
                if(email == result[0].Username && pass == result[0].password1)
                res.redirect('/print');
                else
                if(pass != result[0].password1)
                res.write('<h1>invaild password </h1>')
            }
            catch(e){
                res.write('<h1> invaild email </h1>')
            }
        })
    }) 
})
app.get('/print',(req,res)=>{
    con.connect((err)=>{
        if(err) console.log(err);

        console.log("connect");
        let sql=`select * from login`;
        con.query(sql,(err,resul)=>{
            if(err) console.log(err);
            res.render(__dirname+'/view/output',{data:resul})
        })
    })
})
app.get('/ForgotPass',(req,res)=>{
    res.sendFile(__dirname+`/html/ForgotPass.html`);
})
app.post('/ForgotPass',(req,res)=>{
    let email=req.body.email;
    console.log(email);
    con.connect((err)=>{
        if(err) console.log(err);        
         let sql=`select * from login where email='${email}'`;
         con.query(sql,(er,result)=>{
            if(er) 
            {console.log(er);}
            else
            try{
                if(result[0].email=email)
                {
                    res.redirect('/print');
                }                
            }
            catch(e)
            {
                //console.log(e)
                console.log("invalid gmail")
                res.write('<h1>invalid email </h1>')

            }
        })
    })
})
app.get('/Register',(req,res)=>{
    res.sendFile(__dirname+`/html/Register.html`);
})
app.post('/Register',(req,res)=>{
    let Username=req.body.user;
    let gender=req.body.gender;
    let email=req.body.email;
    let pass1=req.body.pass;
    let pass2=req.body.pass1;
    //console.log( Username+' '+gender+" "+email+" "+pass1+" "+pass2);

    con.connect((err)=>{
        if(err) console.log(err);
         console.log('connect2');

        const sql =`insert into login values('${Username}','${email}','${pass1}','${pass2}','${gender}')`;
        con.query(sql,(er,result)=>{
            if(er) throw er;
            else
            {
                console.log(sql);
                res.redirect('/');
            }
        })
    })
})
app.get('*',(_,res)=>{
    res.write('<h1>this is invaild url </h1>')
})
app.listen(5000);
