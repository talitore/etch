function User(params) {
  // TODO (Taylor E Kems): Schema - http://timjrobinson.com/how-to-structure-your-nodejs-models-2/
  this.info = params;
}
// Instance Methods
User.prototype.info = {};
// Bad practice to mutate the info attribute
User.prototype.get = function (name) {
    return this.info[name];
}
User.prototype.set = function (name, value) {
    this.info[name] = value;
}
// User.prototype.joinRoom = function () {
// };

// Class Methods
// User.findById = function (id, callback) {
// };

module.exports = User;
