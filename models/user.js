function User(data) {
  this.data = data;
}
// Instance Methods
User.prototype.data = {};
User.prototype.changeName = function (name) {
  this.data.name = name;
};

// User.prototype.joinRoom = function () {
// };

// User.findById = function (id, callback) {
// };

module.exports = User;
