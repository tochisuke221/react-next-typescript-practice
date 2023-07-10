import React from 'react'

// 型を定義
type ContainerProps = {
  title: String
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  const { title, children } = props
  
  return (
    <div style={{ background: 'red'}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="Hello">
      <p>ここの部分がchildrenとして渡されて背景色が赤色になる</p>
    </Container>
  )
}

export default Parent
