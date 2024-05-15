// Sử dụng class hoặc Object trong ES6 để làm đẹp lại đoạn code sau

const user =  {
  name: 'John',
  age: 30
}

function displayUser() {
  console.log(user.name + ' is ' + user.age + ' years old.');
}

function updateUser(newName, newAge) {
  user.name = newName;
  user.age = newAge;
}

displayUser();
updateUser('Jane', 25);
displayUser();
