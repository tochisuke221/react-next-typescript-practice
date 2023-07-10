// import React from 'react'

// // 型を定義
// type ContainerProps = {
//   title: String
//   children: React.ReactNode
// }

// const Container = (props: ContainerProps) => {
//   const { title, children } = props
  
//   return (
//     <div style={{ background: 'red'}}>
//       <span>{title}</span>
//       <div>{children}</div>
//     </div>
//   )
// }

// const Parent = () => {
//   return (
//     <Container title="Hello">
//       <p>ここの部分がchildrenとして渡されて背景色が赤色になる</p>
//     </Container>
//   )
// }

// export default Parent

// 下記にContextで描き直す
import React from "react";

const TitleContext = React.createContext('')

const Title = () => {
  return (
    // Contextのあたいを参照する
    <TitleContext.Consumer>
      {
         title => {
           return <h1>{title}</h1>
         }
      }
    </TitleContext.Consumer>

  )
}


const Header = () => {
  return (
    <div>
      <Title></Title>
    </div>
  )
}

const Page = () => {
  const title = 'React Context'

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>

  )
}

export default Page
