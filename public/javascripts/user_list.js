var updateUserList = function (params) {
  userList = document.getElementById('user-list');
  while (userList.firstChild) {
      userList.removeChild(userList.firstChild);
  }
  for (user of params) {
    node = document.createTextNode(user);
    li = document.createElement("li")
    li.appendChild(node);
    userList.appendChild(li);
  }
}
