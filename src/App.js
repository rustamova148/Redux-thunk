import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addData } from './actions';
function App() {
const dispatch = useDispatch();
const todo = useSelector(store => store.data.todo);

return (
    <div>
      <button type = "button" onClick = {() => dispatch(addData())} >Add Data</button>
      {todo && 
      <div>
        {JSON.stringify(todo)}
      </div>}
    </div>
  );
}

export default App;
