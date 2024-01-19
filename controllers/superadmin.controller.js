const express = require("express");
const mongoose = require("mongoose");
const superadminModel = require("../models/superadmin.model");

const registerSuperAdmin = (req, res) => {
    console.log(req.body);
    superadminModel.findOne({email:req.body.email }, (err, result) => {});
    let form = new superadminModel(req.body);
    form.save((err) => {
      if (err) {
        console.log(err);
        res.send({ message: "unable to register", status: false });
  
        console.log("operation failed");
      } else {
        console.log("successful");
        res.send({
          message: "Registered Successfully",
          details: form,
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
                res.send({
                  user,
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
          // res.send({message:"e exist", status:true})
        } else {
          res.send({ message:"wrong email"});
        }
      }
    });
  };
  
  module.exports = {registerSuperAdmin, authenticateSuperAdmin}