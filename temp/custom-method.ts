// 커스텀 메소드 정의해서 쓰기
Array.prototype.take = function (n: number) {
  return this.slice(0, n);
};

interface Array<T> {
  take(n: number): this;
}

console.log([1, 2, 3, 4, 5, 6, 7].take(3));
