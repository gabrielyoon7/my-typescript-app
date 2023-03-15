type FirstAndLastNames = {
  first: string;
  last: string;
}

// ok
const hasBoth: FirstAndLastNames = {
  first: 'Gabriel',
  last: 'Yoon',
};

// error
const hasOnlyOne: FirstAndLastNames = {
  first: 'Gabriel',
};
