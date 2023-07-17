import { render, screen, RenderResult, fireEvent } from "@testing-library/react";
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult

  // コンポーネント描画
  beforeEach(() => {
    renderResult = render( <Input id='username' label='Username' /> )
  })

  // 解放
  afterEach(() => {
    renderResult.unmount()
  })

  it('初期描画時に空であること', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    expect(inputNode).toHaveValue('')
  })

  it('文字入力したら入力内容が表示されること', ()=> {
    const inputText = 'テストInput'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    
    // 変化を発火
    fireEvent.change(inputNode, { target: { value: inputText } })
    
    expect(inputNode).toHaveValue(inputText)
  })
  
  it('リセットボタンを押すと、入力内容がクリアされること', ()=>{
    const inputText = "テストInput"
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    // 入力状態を再現
    fireEvent.change(inputNode, { target: { value: inputText }})
    // ボタンを取得する
    const buttonNode = screen.getByRole('button', { name: 'Reset' }) as HTMLInputElement
    fireEvent.click(buttonNode)

    // 空であることを確認
    expect(inputNode).toHaveValue('')
  })
})
