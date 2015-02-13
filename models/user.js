function User(data) {
  this.data = data;
}
// Instance Methods
User.prototype.data = {};
// Bad practice to mutate the data attribute
User.prototype.get = function (name) {
    return this.data[name];
}
User.prototype.set = function (name, value) {
    this.data[name] = value;
}
// User.prototype.joinRoom = function () {
// };

// Class Methods
// User.findById = function (id, callback) {
// };

module.exports = User;
