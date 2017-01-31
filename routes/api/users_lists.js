'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex');

router.route('/').get(function(req, res, next){
    knex('users_lists')
    .orderBy('id').then(function(users_lists){
        res.json(users_lists);
    }).catch(function(err){
        next(new Error(err));
    });
});


module.exports = router;
