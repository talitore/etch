var pushToUserList = function (params) {
  userList = document.getElementById('user-list');
  node = document.createTextNode(params.user.data.id);
  userList.appendChild(node);
}
