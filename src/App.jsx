
import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const count = useSelector(state => state.counter.value)
  console.log(count)

  return (
    <div >
      <h1>
        Hello
      </h1>

    </div>
  );
}

export default App;
