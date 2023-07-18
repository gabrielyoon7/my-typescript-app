/**
 * Pick
 * https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ko.md
 */

/**
 * type MyPick<T, K> = any
 *  */
type MyPick<T, K extends keyof T> = {
  [keys in K]: T[keys]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview1 = MyPick<Todo, 'title' | 'completed'>
const todo1: TodoPreview1 = {
  title: 'Clean room',
  completed: false,
};

type TodoPreview2 = MyPick<Todo, 'description'>
const todo2: TodoPreview2 = {
  description: 'dd',
};

console.log(todo1, todo2);
