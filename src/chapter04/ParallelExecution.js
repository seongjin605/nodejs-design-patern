const array = [1000, 2000, 1500, 3000, 1800, 500];

const filteredArray = array.map(v => new Promise(resolve => setTimeout(resolve, v)));
const result = Promise.all(filteredArray);

console.log('result:', result);
