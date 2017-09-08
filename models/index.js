"use strict";

var fs = require("fs");
var path = require("path");
var postgreConfig = require("../settings/config");
var Sequelize = require("sequelize");

var db = {};

var sequlize = new Sequelize(postgreConfig.database, postgreConfig.user, postgreConfig.password, postgreConfig.options);

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
    var model = sequlize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequlize;
db.sequelize = sequlize;

module.exports = db;