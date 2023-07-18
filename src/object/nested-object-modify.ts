/* eslint-disable no-unused-vars */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-expressions */
type Address = {
  location: string;
  zcode: number;
}

type NameKey = 'first' | 'last';
type Name = Record<NameKey, string>;

interface User {
  name: Name,
  address: Address
}

type UserKey = keyof User;

const myInfo: User = {
  name: {
    first: 'Gabriel',
    last: 'Yoon',
  },
  address: {
    location: 'Hanam',
    zcode: 0,
  },
};

const updateInfo = (info: User, key: UserKey, nestedKey: NameKey | keyof Address, newValue: string | number): User => {
  info[key][nestedKey] = newValue;
  return info;
};

console.log(myInfo);
// myInfo.address.zcode = 12912;
// myInfo['address'].zcode = 12912;
// myInfo['address']['zcode'] = 12912;
updateInfo(myInfo, 'address', 'zcode', 12912);
console.log(myInfo);
