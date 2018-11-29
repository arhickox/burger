var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(table, inputName, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (burgerName, devoured) ";
        queryString += "VALUES (";
        queryString += inputName;
        queryString += ", FALSE);"
        connection.query(queryString, [table, inputName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(table, changeName, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET devoured = TRUE WHERE burgerName='"
        queryString += changeName
        queryString += "';"
        connection.query(queryString, [table, changeName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.export = orm;