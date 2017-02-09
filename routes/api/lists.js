'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('lists')
    .orderBy('id').then(function(lists){
        res.json(lists);
    }).catch(function(err){
        next(new Error(err));
    });
});


router.route('/:id').get(function(req, res, next){
    var listsId =  Number(req.params.id);
    knex('lists').where('id', listsId)
    .then(function(specificFilterTag){
        res.json(specificFilterTag);
    }).catch(function(err){
        next(new Error(err));
    });
});

router.route("/").post(function (req, res, next) {
    console.log(req.body)
    var userId = req.body.userId
    var listName = req.body.listName
    knex("lists")
    .insert({
        name: req.body.name
    })
    .returning(["name", "id"])
    .then(function (listData) {
        return knex('users_lists')
        .insert({list_id:listData[0].id, user_id: userId})
        .returning(['list_id'])
    }).then(function(usersListsData){
        res.json(usersListsData)
    }).catch(function (err) {
        next(new Error(err));
    });
});

router.route("/:id").patch(function (req, res, next) {
    var listsId =  Number(req.params.id);
    knex("lists")
    .where('id', listsId)
    .update({
        name: req.body.name
    })
    .returning("*")
    .then(function (lists) {
        res.json(lists[0]);
    })
    .catch(function (err) {
        next(new Error(err));
    });
});

router.route("/:id").delete(function (req, res, next) {
    let listsId = Number(req.params.id);
    knex("lists")
    .where("id", "=", listsId)
    .del()
    .returning(["name"])
    .then(function (lists) {
        res.json(lists[0]);
    })
    .catch(function (err) {
        next(new Error(err));
    });
});

module.exports = router;
