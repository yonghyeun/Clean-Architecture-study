import { useEffect, useState } from 'react';

export default function App({ num = 5, isUncomplete = false }) {
  const [filterdTodo, _] = useFilteredTodo(num, isUncomplete);

  return (
    <article>
      <h1>Todo List TOP {num}</h1>
      <ul>
        {filterdTodo.map(({ title, completed, id }) => (
          <li key={id} style={{ color: completed ? 'blue' : 'red' }}>
            {title}
          </li>
        ))}
      </ul>
    </article>
  );
}

const useFilteredTodo = (num, isUncomplete) => {
  const [filtedTodo, setFiltedTodo] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const endPoint = 'https://jsonplaceholder.typicode.com/todos';
      const res = await fetch(endPoint, { method: 'GET' });
      const body = await res.json();

      const result = body.filter(({ completed }) =>
        isUncomplete ? !completed : true,
      );

      const filterdTodo = (todo, num, start = 0) => todo.slice(start, num);

      setFiltedTodo(filterdTodo(result, num));
    };

    getTodos();
  }, []);

  return [filtedTodo, setFiltedTodo];
};
