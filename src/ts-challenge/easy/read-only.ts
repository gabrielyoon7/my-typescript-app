type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
}

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string
  };
}

const foo: MyReadonly<Todo1> = {
  completed: false,
  description: '',
  meta: { author: '' },
  title: ''
};

foo.title = '';
