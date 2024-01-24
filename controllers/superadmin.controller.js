const express = require("express");
const mongoose = require("mongoose");
const superadminModel = require("../models/superadmin.model");

const registerSuperAdmin = (req, res) => {
    console.log(req.body);
    superadminModel.findOne({email:req.body.email }, (err, result) => {});
    let form = new superadminModel(req.body);
    let firstname = req.body.firstname
    let surname = req.body.surname
    let email = req.body.email
    let phonenumber = req.body.phonenumber
    let signUpDetails = {firstname, surname, email, phonenumber}
    
    form.save((err) => {
      if (err) {
        console.log(err);
        res.send({err, message: "unable to register", status: false });
  
        console.log("operation failed");
      } else {
        console.log("successful");
        res.send({
          message: "Registered Successfully",
          details: signUpDetails,
          status: true,
        });
      }
    });
  };

  const authenticateSuperAdmin = (req, res) => {
    // console.log(req.body)
    let { password } = req.body; 
    superadminModel.findOne({email:req.body.email}, (err, user) => {
      if (err) {
        res.send({ message: "server error", status:false});
        console.log("error guyy");
      } else {
        if (user) { 
          user.validatePassword(password, (err, same) => {
            if (err) {
              res.send({ message: "Server error", status:false});
            } else {
              if (same) {
                let firstname = user.firstname
                let surname = user.surname
                let email = user.email
                let phonenumber = user.phonenumber
                let loginDetails = {firstname, surname, email, phonenumber}
                res.send({
                  user: loginDetails,
                  message: "user logged in successfully",
                  status: true,
                });
                console.log("correct");
              } else {
                res.send({ message: "wrong password"});
                console.log("wrong");
              }
            }
          });
        } else {
          res.send({ message:"check email and ensure it is correct"});
        }
      }
    });
  };
  
  module.exports = {registerSuperAdmin, authenticateSuperAdmin}