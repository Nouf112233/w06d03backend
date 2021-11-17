const fs = require("fs");

let users=[];

//read data from file system user
fs.readFile("./db/user.json",(err,data)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        users=JSON.parse(data.toString());
    }
})

//read all data from filesystem user
const allusers=(req,res)=>{
    res.status(200).json(users);
}

//read data by email from filesystem food
const userbyemail=(req,res)=>{
    const {email}=req.body;
    const user=[];
    users.map(item=>{
        if(item.email==email)
        {
            user.push(item);
        }
    })
    res.status(200).json(user);
}
 
//creat new user and save in file system user
const newUser=(req,res)=>{
    const {username,email,password}=req.body;
    users.push({username:username,email:email,password:password,fav:[]})
    fs.writeFile("./db/user.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(400).json("bad request");
        } else {
          res.status(200).json(users);
        }
      });

}

module.exports = {
    allusers,
    userbyemail,
    newUser
  };
