import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, increase, reset  } from './redux/counterSlice';
import { counterSlice } from './redux/counterSlice';



function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  // const reset = counterSlice((state => state.initialState.counter));
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increase())}>Up</button>
      <button onClick={() => dispatch(decrease())}>Down</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
