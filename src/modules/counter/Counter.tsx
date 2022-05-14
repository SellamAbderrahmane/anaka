import React from "react"
import { useCounter } from "."

import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { currentState } from "./state/state"

export function Counter() {
  const incrementValue = 1
  const action = useCounter()
  const dispatch = useAppDispatch()
  const state = useAppSelector(currentState)


  if(state.status === 'loading') return <div>loading</div>

  return (
    <div>
      <span>{state.value}</span>
      <div>
        <button onClick={() => dispatch(action.increment(incrementValue))}>Add Async</button>
      </div>
    </div>
  )
}
