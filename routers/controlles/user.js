const fs = require("fs");

const users;

fs.readFile("./db/users.json",(err,data)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        users=JSON.parse(data.toString());
    }
})

const allusers=(req,res)=>{
    res.status(200).json(users);
}

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

const newUser=(req,res)=>{
    const {username,email,passward}=req.body;
    users.push({username:username,email:email,passward:passward,fav:[]})
    fs.writeFile("./db/users.json", JSON.stringify(users), (err) => {
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
