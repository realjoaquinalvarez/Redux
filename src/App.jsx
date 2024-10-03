import './App.css'
import reactLogo from './assets/react.svg'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter';


function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>{ counter }</h1>

      <div className="card">
        
        <button onClick={ () => { dispatch( increment() )} }>
          increment
        </button>

        <button onClick={ () => { dispatch( decrement() )} }>
          decrement
        </button>
        <button onClick={ () => { dispatch( incrementBy(2) )} }>
          increment by 2
        </button>
     
      </div>
    
    </>
  )
}

export default App
