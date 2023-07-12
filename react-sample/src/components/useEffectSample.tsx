import React, { useState, useEffect } from 'react'

// タイマー周期(ms)
const UPDATE_CYCLE = 1000
const KEY_LOCAL = 'KEY_LOCAL'

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch(text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  // タイマーセット（初期）
  useEffect(() => {
    
    const timer = setInterval(() => {
       setTimestamp(new Date())
    }, UPDATE_CYCLE)
    return () => {
      clearInterval(timer)
    }
  }, [])

  // localStorageから値を読み込む
  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCAL)

    if(savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  // localStorageに値を格納
  useEffect(() => {
    localStorage.setItem(KEY_LOCAL, locale)
  }, [locale])

  return (
     <div>
       <p>
         <span id="current-item-label">現在時刻</span>
         <span>: {timestamp.toLocaleString(locale)}</span>
         <select 
           value={locale}
           onChange={(e) => { setLocale(getLocaleFromString(e.target.value))}}
         >
           <option value="en-US">en-US</option>
           <option value="ja-JP">ja-JP</option>
         </select>
       </p>
     </div>
  )

}
