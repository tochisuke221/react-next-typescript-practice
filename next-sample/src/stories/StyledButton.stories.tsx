// import React, { useState } from 'react'
// import { Meta, StoryObj } from '@storybook/react'
// import { StyledButton } from '../components/StyledButton'
// import { action } from '@storybook/addon-actions'
// import { type } from 'os'


// // ファイル内のStoryの設定
// export default {
//   title: 'StyledButton',
//   component: StyledButton,
//   argTypes: {
//     variant: {
//       control: { type: 'radio' },
//       options: ['primary', 'success', 'transparent']
//     },
//     children: {
//       control: { type: 'text' },
//     },
//     onClick: { action: 'clicked' } 
//   }
// } as Meta<typeof StyledButton>


// type Template = StoryObj<typeof StyledButton>

// export const Template: Template = {
//   render: () => <StyledButton/>
// }


import type { Meta, StoryObj } from '@storybook/react';
import { StyledButton } from '../components/StyledButton'
// import StyledButton from './StyledButton';

const meta = {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
     variant: {
       control: { type: 'radio' },
       options: ['primary', 'success', 'transparent']
     },
     children: {
       control: { type: 'text' },
     },
     onClick: { action: 'clicked' } 
   }
} as Meta<typeof StyledButton>;

export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Button: Story = {
  render: (props) => {
    return <StyledButton  {...props}></StyledButton>
  },
};

Button.args ={
  variant: 'transparent',
  children: 'Transparent'
}
