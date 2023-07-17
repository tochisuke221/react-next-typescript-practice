import React, { useState, useCallback, useRef } from "react";

type DelayButtonProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const  DelayInput = (props: DelayButtonProps) => {
  const { onChange } = props

  // 入力中かどうかを保持する状態
  const [isTyping, setIsTyping] = useState(false)
  // iテキスト
  const [inputValue, setInputValue] = useState('')
  const [viewValue, setViewValue] = useState('')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTyping(true)
    setInputValue(e.target.value)
    
    // 以前のタイマーを解除
    if (timerRef.current !== null){
        clearTimeout(timerRef.current);
    }
      
    // 1秒後にタイマーをセット
    timerRef.current = setTimeout(() =>{
        timerRef.current = null

        setIsTyping(false)
        setViewValue(e.target.value)
        onChange(e)
    }, 1000)
  }, [onchange])

  const text = isTyping ? '入力中...' : `入力したテキスト: ${viewValue}`

  return (
    <div>
      <input data-testid="input-text" value={inputValue} onChange={handleChange} />
      <span data-testid="display-text">{text}</span>
    </div>
  )
}
