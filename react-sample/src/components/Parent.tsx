import React, { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props

  console.log('Fizz 再描画されました')

  return <span>{ isFizz ? 'Fizz' : '' }</span>
}

type BuzzProps = {
  isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props

  console.log('Buzzが再描画されました')

  return <span>{ isBuzz ? 'Buzz' : '' }</span>
})


export const Parent = () => {
  const [count, setCount] = useState(1)

  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parentが再描画されました。count=${count}`)

  return (
    <div>
      <button onClick={()=> setCount((currentCount)=>(currentCount - 1))}>-1</button>
      <button onClick={()=> setCount((currentCount)=>(currentCount + 1))}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz}/>
        <Buzz isBuzz={isBuzz}/>
      </p>
    </div>
  )

}
