
import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import {increment , decrement} from "./store/counterslice"
function App() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  console.log(count)

  return (
    <div >
      <button className="btn btn-outline-dark" onClick={() => dispatch(increment())} >Add</button>
      <button className="btn btn-outline-dark" onClick={() => dispatch(decrement())} >Sub</button>
<br />
{count}
    </div>
  );
}

export default App;
