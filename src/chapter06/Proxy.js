const scientist = {
  name: 'nikola',
  surname: 'tesla'
};

const uppercaseScientist = new Proxy(scientist, {
  get: (target, property) => target[property].toUpperCase()
});

const lowercaseScientist = new Proxy(scientist, {
  get: (target, property) => target[property].toLowerCase()
});

console.log(uppercaseScientist.name, uppercaseScientist.surname);
console.log(lowercaseScientist.name, lowercaseScientist.surname);
