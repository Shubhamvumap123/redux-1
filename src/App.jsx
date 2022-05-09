

import './App.css'
import { addCount } from './Redux/action';

import { useDispatch , useSelector} from 'react-redux';
import { Todos } from "./components/Todo"
function App() {

  const dispatch = useDispatch();
  console.log(dispatch())
const counter = useSelector((store) =>( store.counter));
  console.log(store);
  return (

    <div className="App">

     <h3>Counter: {counter}</h3>

     <button onClick={()=>{dispatch(addCount(1))}}>Add 1</button>

      <Todos/>

    </div>

  )

}

export default App;
