import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

// type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
//   className?: string
//   children: React.ReactNode
// }

// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
// const BaseLink = (props: BaseLinkProps) => {
//   const { className, children, ...rest } = props
//     return (
//       <Link {...rest}>
//           {children}
//       </Link>
//     )
// }

// 今やLinkにstyled-componentsを当てるには下記のようにすれば良い
const StyledLink = styled(Link)`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
    return (
        <StyledLink href="/">Go ti Index</StyledLink>
    )
}

export default Page
