type Type = 'Hello' | 'World'

function sayHello(hello: string) {
  console.log(hello);
}

function print(message: Type) {
  if (message === 'Hello') {
    return;
  }
  if (message === 'World') {
    return;
  }
  sayHello(message);
}

print('Hello');
