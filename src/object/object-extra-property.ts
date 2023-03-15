type Poet = {
  born: number;
  name: string;
}

const poetMatch: Poet = {
  born: 1928,
  name: 'GabrielYoon',
};

const extraProperty: Poet = {
  activity: 'walking',
  born: 1996,
  name: 'GabrielYoon',
};
// 프로퍼티가 초과해서 오류

const existingObject = {
  activity: 'walking',
  born: 1996,
  name: 'GabrielYoon',
};
const extraPropertyButOk: Poet = existingObject;
// 이런 방식으로 우회하는 방법이 있다.

console.log(extraPropertyButOk);
