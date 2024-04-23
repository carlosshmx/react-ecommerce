import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app =express()

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"01091992",
    database:"reactdb",
    insecureAuth : true
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// to send from html body
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.get("/user",(req,res)=>{
    const q="SELECT * FROM reactdb.user"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Login",(req,res)=>{
    const email = req.query.email;
    const password = req.query.password
    db.query(`SELECT * FROM reactdb.user WHERE user_email = ? AND user_password = ?`,[email,password],
    (err,data)=>{
        if(err) return console.log(err)
        return res.json(data)
    })
})

app.get("/Profile",(req,res)=>{
    const email = req.query.email;
    db.query(`SELECT * FROM reactdb.user WHERE user_email = ?`,[email],
    (err,data)=>{
        if(err) return console.log(err)
        return res.json(data)
    })
})

app.post("/create",(req,res)=>{
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO reactdb.user (`user_name`, `user_lastname`, `user_email`, `user_password`) VALUES(?,?,?,?)',[name,lastname,email, password],
    (err, res)=>{
            if(err){
                console.log(err);
            }else{
                return res;
            }
        })
    })

app.listen(3001,()=>{
    console.log("Connect to backend.")
})