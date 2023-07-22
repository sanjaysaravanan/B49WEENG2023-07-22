[1, 2, 3, 'SAM', true].includes('SAM');


// predicate is callback function which will return true/false ( boolean value )

[1, 2, 3, 4, 5].filter(function (v) { return v % 2 === 0; }); //[2]



['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].find(function (str) { return str.includes('jay') });

['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].findLast(function (str) { return str.includes('jay') });

['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].findIndex(function (str) { return str.includes('jay') });

['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].findLastIndex(function (str) { return str.includes('jay') });



// forEach
const returnValue = ['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].forEach(function (value, index, array) {
  console.log(value, index, array);
});

const returnVal = ['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].forEach((v, i, a) => {
  console.log(v, i, a);
});

console.log(returnValue);


// map
const returnVals = ['vijay', 'sanjay', 'ajay', 'ram', 'venkat'].map(function (val, ind, arr) {
  console.log(val, ind, arr);
  return `name is ${val}`;
});

console.log(returnVals);

// Reduce
[1, 2, 3, 4, 5, 6, 7, 8].reduce((prevVal, currVal, index, arr) => {

  console.log('prevVal', prevVal);
  console.log('currVal', currVal);
  console.log('index', index);
  console.log('arr', arr);

  return prevVal + currVal;

});

['s', 'a', 'n', 'j', 'a', 'y'].reduce((prevVal, currVal, index, arr) => {
  return prevVal + currVal;
});


[1, 2, 3, 4, 5, 6, 7, 8].reduce((prevVal, currVal, index, arr) => {
  console.log('prevVal', prevVal);
  console.log('currVal', currVal);
  console.log('index', index);
  console.log('arr', arr);
  return prevVal + currVal;
}, 0);