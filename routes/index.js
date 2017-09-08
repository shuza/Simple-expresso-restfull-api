var express = require('express');
var router = express.Router();
var sizeof = require('object-sizeof');

var models = require('../models');

/* GET home page. */
router.get('/', function (request, response, next) {
    models.Tasks.all().then(function (taskList) {
        response.render('index', {tasks: taskList})
    });
});


router.post('/add-task', function (request, response) {

    console.log("request body taskName: " + request.body.taskName);

    models.Tasks
        .build({
            title: request.body.taskName,
            completed: false
        })
        .save()
        .then(function () {
            models.Tasks.findAll({}).then(function (taskList) {
                response.render('index', {tasks: taskList})
            });
        });
});


module.exports = router;