import { useCallback, useState } from "react";
import Todos from "./components/Todos";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  //increment function
  const increment = () => {
    setCount(count + 1);
  };

  //addTodo function
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default App;