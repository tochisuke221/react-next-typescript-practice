import React, { useContext } from 'react'

type User = {
  id: number
  name: string
}

// ユーザデータを保持するContextを作成
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  const user = useContext(UserContext)

  return user !== null ? <p>Hello, {user.name}</p> : null 
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: { now.toLocaleString() }</p>
    </div>
  )
}

export const Parent = () => {
  const user: User = {
    id: 1,
    name: 'たろう'
  }

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}
