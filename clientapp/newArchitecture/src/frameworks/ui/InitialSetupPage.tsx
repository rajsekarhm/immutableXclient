import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from "../../applications/usecases/Reducers";

function InitialSetupPage(){
  const count = useSelector(store => store.math)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="card">
        <h1> Count is {count}</h1>
        <button onClick={() => dispatch(increment({firstName:"raji"}))}>
        increment
        </button>
        <button onClick={() => dispatch(decrement({firstName:"raji"}))}>
        decrement
        </button>
      </div>
    </div>
  );
}

export default InitialSetupPage;
