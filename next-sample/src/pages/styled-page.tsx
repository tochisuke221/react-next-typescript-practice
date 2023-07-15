import { NextPage } from 'next'
import styled from 'styled-components'

// spna要素にスタイルを適用したコンポーネント
const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  background: red;
  border-radius: 16px;
`

const styledPage: NextPage = () => {
  return <Badge>Hello, Styled Page</Badge>
}

export default styledPage
