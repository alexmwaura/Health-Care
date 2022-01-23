'use strict'

function User(){
	this.username=""
}

User.prototype.add_user = function(argument) {
	this.username = argument
};


module.exports = User