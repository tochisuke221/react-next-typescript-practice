import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが描画されました')

  return <button onClick={onClick}>Decrement</button>
}

// メモ化しているが、propsのonClickがParent側で新しくなるため毎回描画される
const IncrementButton = React.memo((props: ButtonProps) => {
  debugger
  const { onClick } = props

  console.log('IncrementButtonが描画されました')

  return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButtonが描画されました');

  return <button onClick={onClick}>DoubleButton</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const increment = () => {
    setCount((c) => c + 1)
  }
  
  const double = useCallback(()=>{
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decrement}></DecrementButton>
      <IncrementButton onClick={increment}></IncrementButton>
      <DoubleButton onClick={double}></DoubleButton>
    </div>
  )
}
