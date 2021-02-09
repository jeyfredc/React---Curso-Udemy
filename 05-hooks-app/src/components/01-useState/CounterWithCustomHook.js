import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = ( ) => {

  const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
          <h1> Counter with Hook: { counter } </h1>
          <hr/>

          <button 
          className="btn btn-success m-3"
          onClick={() => increment(3)}
          >
             +3
          </button>

          <button 
          className="btn btn-primary m-3"
          onClick={reset}
          >
             Reset 
          </button>  

          <button 
          className="btn btn-danger m-3"
          onClick={() => decrement(3)}
          >
             -3
          </button>  

        </>
    )
}
