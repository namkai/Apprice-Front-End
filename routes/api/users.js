'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');
const bcrypt = require("bcrypt-as-promised");


router.route("/register").post(function (req, res, next) {
    console.log(req.body)
    bcrypt.hash(req.body.password, 3).then(function(hash){
        knex("users")
        .insert({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            hashed_password: hash
        })
        .returning(["first_name", "last_name", "email"])
        .then(function (userData) {
            res.json(userData)
        })
        .catch(function (err) {
            next(new Error(err));
        })
    })
});

router.route("/login").post(function (req, res, next) {
    var usersEmail = req.body.email;
        knex("users").select("*").where("email", usersEmail)
        .then(function(userInfo){
            var hashed = userInfo[0].hashed_password;
            var firstname = userInfo[0].first_name;
            bcrypt.compare(req.body.password, hashed).then(function(){
                req.session.firstname = firstname;
                req.session.userId = userInfo[0].id;
                req.session.email = userInfo[0].email;
                delete userInfo[0].hashed_password;
                delete userInfo[0].created_at;
                delete userInfo[0].updated_at;
                res.json(userInfo);
            }).catch(bcrypt.MISMATCH_ERROR, function(){
                res.send("That was an invalid login!");
            }).catch(function (err) {
                next(new Error(err));
            })
        })
        .catch(function (err) {
            next(new Error(err));
        })
});

router.route("/:email").patch(function (req, res, next) {
    var usersEmail = req.params.email;
  knex("users")
  .where('email', usersEmail)
  .update(req.body)
  .returning("*")
  .then(function (users) {
    res.json(users);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});

router.route("/:email").delete(function (req, res, next) {
  let usersEmail = req.params.email;
  knex("users")
  .where("email", "=", usersEmail)
  .del()
  .returning(["first_name", "last_name", "email", "id"])
  .then(function (users) {
    res.json(users);
  })
  .catch(function (err) {
      next(new Error(err));
    });
});


module.exports = router;
