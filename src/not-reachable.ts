function sayHello(hello: string) {
  console.log(hello);
}

function print(message: 'Hello' | 'World') {
  if (message === 'Hello') {
    return;
  }
  if (message === 'World') {
    return;
  }
  sayHello(message);
}

print('Hello');
