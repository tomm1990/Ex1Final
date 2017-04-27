'use strict';

/**
 * Created by TomGoldberg on 27/04/2017.
 */


var events = require('events');

class Account extends events {

    constructor(){
        super();
        this.balance = 0;
        events.EventEmitter.call(this);
    }

    deposit(amount){
        this.balance += amount;
        this.emit('balanceChanged');
    }

    withdraw(amount){
        this.balance -= amount;
        this.emit('balanceChanged');
    }

    getBalance(){
        return this.balance;
    }
}


function displayBalance() {
    console.log(`Account balance is : ${this.balance}`);
}

function checkOverDraw(){
    if(this.balance<0){
        console.log(`Account overdrawn!  : ${this.balance}`);

    }
}

function checkGoal(acc,goal){
    if(acc.balance > goal){
        console.log(`Goal Achieved!  : ${acc.balance}`);
    }
}

module.exports = {
    Account,
    displayBalance,
    checkOverDraw,
    checkGoal
};