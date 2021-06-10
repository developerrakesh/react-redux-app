import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';

function App() {
  let data = useSelector(state => state);
  let dispatch = useDispatch();

  return (
    <>
      <h1>Counter {data.counter}</h1>
      <button style={{marginRight: '10px', marginBottom: '20px'}} onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      
      {data.isLogged ? <button style={{padding: '3px 13px'}} onClick={() => dispatch(logout())}>Sign Out</button> : <button style={{marginRight: '10px', padding: '3px 13px'}} onClick={() => dispatch(login())}>Sign In</button>}
      
      {data.isLogged && <p>User is Logged in, User you are welcome to the website</p>}
    </>
  );
}

export default App;
