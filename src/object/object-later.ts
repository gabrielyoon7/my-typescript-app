/* eslint-disable dot-notation */
let meLater: {
  born: number;
  name: string;
};
meLater = {
  born: 1996,
  name: 'Gabriel Ju Hyun, Yoon',
};

meLater = 'Foo';

console.log(meLater.born);
console.log(meLater['name']);
// console.log(meLater.end);
