const user = {
  name: 'mehedi',
  age: 23,
  friends: ['mehedi', 'sohag'],
  contact: {
    email: {
      one: 'mehedi.sohag@yahoo.com',
      two: 'pymehedi@gmail.com',
    },
    phone: {
      gp: '01723-198734',
      bl: 'o1987-239802',
    },
  },
  address: function ({ id = 00, blood = '--' }) {
    console.log(`your id ${id} and blood group is ${blood}`);
  },
};

const { name: myName, age: myAge } = user;
console.log(myName, myAge);
const {
  contact: {
    phone: { gp = 'empty', bl = 'empty' },
  },
} = user;
console.log(gp);
console.log(bl);

let a = 1;
let b = 3;
const obj = {
  a: 11,
  b: 33,
};

const mehedi = {
  id: 1029,
};

user.address(mehedi);
