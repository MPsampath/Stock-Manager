import mongoose from 'mongoose'; 
import {userRegisterSchema} from '../models/userRegisterModel';

const Users = mongoose.model('Users',userRegisterSchema);

export const newUser =(req,res) => {
    try {
    
    let newUser = new Users(req.body);
    const saveUser = newUser.save();
    res.json(Users);
    } catch (error) {
        res.json(error);
    }
};

export const getUsers =(req,res) => {
    Users.find({})
    .then(documents => {
      res.json(documents);
    })
    .catch(err => {
      res.json( err);
    });
   
};

export const getUsersById =(req,res) => {
    Users.findById(req.params.UserId)
    .then(documents => {
      res.json(documents);
    })
    .catch(err => {
      res.json( err);
    });
   
};

export const updateUser =(req,res) => {
    Users.findOneAndUpdate({_id: req.params.UserId},{$set:req.body},{new: true})
    .then(documents => {
      res.json(documents);
    })
    .catch(err => {
      res.json( err);
    });
   
};

export const deleteUser =(req,res) => {
    Users.deleteOne({_id: req.params.UserId})
    .then(documents => {
      res.json({messages :"Deleted"});
    })
    .catch(err => {
      res.json( err);
    });
   
};

export const userLoging =(req,res) => {
  const {email,password} = req.body;
  const checkEMail = Users.findOne({email: email})

  if (checkEMail) {
    const checkpassword = Users.findOne({password: password})
    if (checkpassword) {
      res.json("Loged")
    }else{
      res.json("Password is wrong")
    }
  }else{
    res.json("email not exist")
  }
  // .then(documents => {
  //   res.json({messages :"Deleted"});
  // })
  // .catch(err => {
  //   res.json( err);
  // });
 
};