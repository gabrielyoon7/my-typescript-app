type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
}

const poemMatch: Poem = {
  author: {
    firstName: 'Gabriel',
    lastName: 'Yoon',
  },
  name: 'Gabriel Yoon',
};

const poemMismatch: Poem = {
  author: {
    name: 'Gabriel Yoon',
  },
  name: 'G',
};
