var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (inputName, cb) {
        orm.insertOne("burgers", inputName, function(res) {
            cb(res);
        });
    },
    updateOne: function (changeName, cb) {
        orm.updateOne("burgers", changeName, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;
