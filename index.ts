console.log('You forget a thousand things every day. Make sure this is one of them');

let rocker:string;
rocker = 'yay'; // 반드시 문자열로만 할당 가능
rocker = 'Gabriel Yoon';
console.log(rocker);

// const rapper = 'Queen Latifah';
// rapper.length;
// rapper.push('!'); // error TS2339: Property 'push' does not exist on type '"Queen Latifah"'.

/**
 * https://yceffort.kr/2021/06/typescript-structual-typing 예제 실습
 */

interface Vector2D {
  x: number
  y: number
}

function calcLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

console.log(calcLength({ x: 1, y: 2 }));

//

interface Vector2DWithName extends Vector2D {
  name: string
}

const a: Vector2DWithName = { name: 'hi', x: 5, y: 10 };
console.log(calcLength(a)); // works fine

interface Vector2DName {
  name: string
  x: number
  y: number
}

const b: Vector2DName = { name: 'hello', x: 10, y: 10 };
console.log(calcLength(b)); // works fine, too.

//

interface Vector3D {
  x: number
  y: number
  z: number
}

function normalize(v: Vector3D) {
  const length = calcLength(v); // z가 고려되지 않음
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length, // z의 값이 이상하게 나옴
  };
}

console.log(normalize({ x: 3, y: 4, z: 5 })); // 그러나 에러는 안남

//

function calcLengthV1(v: Vector3D) {
  let length = 0;
  // eslint-disable-next-line no-restricted-syntax
  for (const axis of Object.keys(v)) {
    // eslint-disable-next-line max-len
    const coord = v[axis]; // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Vector3D'.
    // No index signature with a parameter of type 'string' was found on type 'Vector3D'.(7053)
    length += Math.abs(coord);
  }
  return length;
}

function calcLengthV2(v: Vector3D) {
  return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

const v = {
  x: 1, y: 2, z: 3, name: 'hi, h i~',
};

calcLengthV1(v); // name의 값이 NaN이라서 결과가 NaN으로 뜰 수 있다.
calcLengthV2(v);
