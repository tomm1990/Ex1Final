'use strict';

/**
 * Created by TomGoldberg on 27/04/2017.
 */

/*
 requires and imports
 */
var Account = require('./account.js').Account,
    displayBalance = require("./account.js").displayBalance,
    checkOverDraw = require("./account.js").checkOverDraw,
    checkGoal = require("./account.js").checkGoal;

/*
 global json var to hold results
 */
var jsonObj = {},
    key = 'Account';
jsonObj[key] = [];

/*
 account creation
 */
var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverDraw);
account.on("balanceChanged", function(){
    checkGoal(this,1000);
});

/*
 event handler
 */
exports.init = function(req, res){
    account.deposit(200);
    jsonObj[key].push({
        Balance: account.getBalance(),
    });
    account.deposit(300);
    jsonObj[key].push({
        Balance: account.getBalance(),
    });
    account.deposit(600);
    jsonObj[key].push({
        Balance: account.getBalance(),
    });
    account.withdraw(1200);
    jsonObj[key].push({
        Balance: account.getBalance(),
    });
    res.send(JSON.stringify(jsonObj));
}