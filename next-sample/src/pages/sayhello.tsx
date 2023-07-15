import { useState, useEffect } from 'react'

const SayHello = () => {
  const [data, setDate] = useState({name: ''})

  // 外部APIにリクエストするのは副作用なのでuseEffect内で処理
  useEffect(()=>{
    fetch('api/hello')
      .then((res)=> res.json())
      .then((profile)=>{
        setDate(profile)
      })
  }, [])

  return <div>hello {data.name} </div>
}

export default SayHello
