
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RootStore } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";

function App() {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state: RootStore) => state.counter
  );

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }


  return (
    <div>
      <h1>Counter with REDUX</h1>
      <Button onClick={() => handleIncrement(5)}>Increment by 5</Button>
      <Button onClick={() => handleIncrement(1)}>Increment</Button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App
