type WithFirstName = {
  firstName: string;
}

type WithLastName = {
  lastName: string;
}

const hasBoth = {
  firstName: 'Gabriel',
  lastName: 'Yoon',
};

const withFirstName: WithFirstName = hasBoth;
const withLastName: WithLastName = hasBoth;

console.log(withFirstName);
console.log(withLastName);
