import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props

  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{setCount(count-1)}}>-1</button>
      <button onClick={()=>{setCount(prevCount => prevCount + 1 )}}>+1</button>
    </div>
  )
}

export default Counter
