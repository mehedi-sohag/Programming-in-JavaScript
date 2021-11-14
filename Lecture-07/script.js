const social = {
  email: {
    one: 'mehedi@yahoo.com',
    two: 'sohag@yahoo.com',
  },
};

const user = {
  name: 'Mehedi',
  age: 24,
  dept: 'cse',
  social,
};

for (var [key, { one, two }] of Object.entries(social)) {
  console.log(one, two);
}
