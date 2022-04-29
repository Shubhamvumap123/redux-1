

import './App.css'
import { addCount } from './Redux/action';

import { useDispatch , useSelector} from 'react-redux';

function App() {

  const dispatch = useDispatch();

const store = useSelector((state) => state.store);

  return (

    <div className="App">

     <h3>Counter: {store}</h3>

     <button onClick={()=>{dispatch(addCount(1))}}>Add 1</button>

    </div>

  )

}

export default App;
