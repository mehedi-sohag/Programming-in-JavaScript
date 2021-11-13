//Spread Operator

const user = {
  name: 'mehedi',
  email: 'mehedi@yahoo.com',
  id: 1028,
  dept: 'CSE',
};

console.log(user);

const newUser = { ...user };
newUser.name = 'roton';
console.log(newUser);

const arr = [1, 2, 3, 4, 5, 6];
const newArr = [...arr, 12, 13];
console.log(newArr);
