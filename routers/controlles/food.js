const fs = require("fs");

let foods = [];

//read data from file system food
fs.readFile("./db/food.json",(err,data)=>{
    if(err){
        console.log(err);
        return err;
    }else{
        foods=JSON.parse(data.toString());
    }
})
  
//read all data from filesystem food
const allFoods = (req, res) => {
  res.status(200).json(foods);
};


module.exports = {
  allFoods,
};
