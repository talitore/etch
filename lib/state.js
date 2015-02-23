var User = require('../models/user.js');
function State() {
  console.log('State init');
  this.currentUsers = [];
}


State.prototype.addUser = function(params) {
  user = new User({id: params.id});
  this.currentUsers.push(user.info.id);
}

State.prototype.removeUser = function(params){
  this.currentUsers.splice(this.currentUsers.indexOf(params.id),1);
}

module.exports = new State();
