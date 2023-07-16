import { NextPage } from 'next'
import styled, {css} from 'styled-components'


// const mixIn = css`
//   font-weight: bold;
// `

// type ButtonProps = {
//     color: string
//     backgroundColor: string
// }

// const Button = styled.button<ButtonProps>`
//   color: ${(props)=> props.color};
//   background: ${(props)=> props.backgroundColor};
//   border: 2px solid ${(props)=> props.color};

//   font-size: 2em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 8px;
//   cursor: pointer;
//   ${mixIn}
// `

const Text = styled.p`
  color: blue;
  font-weight: bold;
`

const BorderdText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`


const styledPage: NextPage = () => {
  return (
    <div>
        <Text>テキスト１</Text>
        <BorderdText>テキスト１</BorderdText>
        <Text as="a" href="/"> Go to Index</Text>
        {/* <Button backgroundColor="transparent" color="#FF0000">Button1</Button> */}
        {/* <Button backgroundColor="#1E90FF" color="white">Button2</Button> */}
    </div>
  )
}

export default styledPage
