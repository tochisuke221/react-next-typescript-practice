import { NextPage } from "next";
import styled from 'styled-components'

const Text = styled.span`
  color: ${(props) => {
    return props.theme.colors.red;
  }};
  font-size: ${(props) => {
    return props.theme.fontSizes[3];
  }};
  margin: ${(props) => {
    return props.theme.space[2];
  }};
`;
const Theme: NextPage = () => {
  return (
      <div>
        <p>あいうお</p>
        <Text>Themeから参照した色を使用しています</Text>
      </div>
  )
}

export default Theme
