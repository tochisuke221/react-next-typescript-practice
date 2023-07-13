import React, { useState, useCallback, useDebugValue } from 'react'

const useInput = () => {
  const [state, setState] = useState('')

  
  // onChangeは常に同じ関数を返す
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  useDebugValue(`Input ${state}`)

  return [state, onChange] as const
}

export const Input = () => {
  const [text, onChangeText] = useInput() // カスタムフック

  return (
    <div>
        <input type="text" value={text} onChange={onChangeText} />
        <p>Input: {text}</p>
    </div>
  )


}
