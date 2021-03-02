function add(a, b, callback) {
  callback(a + b);
}

console.log('Before');
add(1, 2, result => console.log('result:', result));
console.log('After');

console.log('-----------------------------------------------------');

function addtionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log('Before');
addtionAsync(1, 2, result => console.log('result:', result));
console.log('After');
