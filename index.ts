import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// axios.get(url).then((res) => {
//   console.log(res.data);
// });

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const test = async () => {
  const res = await axios.get(url);
  const data = res.data as Todo;

  const id = data.id;
  const title = data.title;
  const completed = data.completed;

  logTodo(id, title, completed);
};

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id);
  console.log(title);
  console.log(completed);
};

test();
