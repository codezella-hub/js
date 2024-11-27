
const User = require('../models/user');

async function showUsername(req,res){
    try{
        const username = req.params.username;
     const user = await User.find({
        username:username
     });
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   }

   async function update(req,res){
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});


    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   }

   async function deleteUser(req,res){
    try{
      await User.findByIdAndDelete(req.params.id);


    res.status(200).json("user deleted with success ");
    }catch(err){
        console.log('error');
    }
    
    
   }

   function add(req,res){
   
    new User({
      username : req.params.username,
      email : req.params.email,
      cin : req.params.cin
    }).save();
    res.send('user added');
   }
    

   function add1(req,res){
    try{
        const user = new User(req.body)

    user.save();
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
   }

   async function find(req,res){
    try{
     const user = await User.find();
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   }
   async function findById (req,res){
    try{
     const user = await User.findById(req.params.id);
    res.status(200).json(user);
    }catch(err){
        console.log('error');
    }
    
    
   }

   function show(req,res){
    res.send('4twin 9');
  }
   module.exports = {showUsername,update,deleteUser,add,add1,find,findById,show};