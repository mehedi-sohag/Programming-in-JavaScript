const arr = [2, 3, 4, 5, 6];
const user = {
  name: 'mehedi',
  age: 23,
  friends: ['alice', 'bob', 'roton', 'hasan', 'era'],
  check: function (one, two) {
    return [this.friends[one], this.friends[two]];
  },
};

console.log(arr);
console.log(arr[0]);
//destructuring an array form existing array

const [a, , b, , c] = arr;
console.log(a, b, c);

const [friend1, friend2] = user.check(2, 3);
console.log(friend1, friend2);
console.log(user.check(1, 2));
const arr1 = [1, 2, [3, 4]];
const [x, , [y, z]] = arr1;
console.log(x, y, z);
