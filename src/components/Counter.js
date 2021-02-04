import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, addByTwo, delay,timer} from '../reducers/index';
// import timerMiddleware from 'redux-timer';


function Counter(props) {

  

  
  const counter = useSelector(state =>state.count)
  const dispatch = useDispatch();
   console.log(counter)
  return (
      <div className='container'>
        <p>Counter {counter}</p>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement())}>DECREMENT</button>
        <br/>
        <button onClick={()=>counter%2!==0?dispatch(addByTwo()):counter}>ODD NUMBER INCREASE</button>
        <button onClick={()=>setTimeout(() => {
    dispatch(delay())
  }, 3000)
}>DELAY INCREASE</button>
        <br/>
        <button onClick={()=>(timer())}>SETTIMER</button>// nedd to be fixed, it does not work

        
      </div>
      )
  }

  export default Counter;