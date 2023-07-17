import { render, screen, RenderResult, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { DelayInput } from './index'


describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(()=> {
    handleChange = jest.fn() // モック関数の作成
    jest.useFakeTimers()     // タイマーをjestのものに置き換える
    renderResult = render(<DelayInput  onChange={handleChange}></DelayInput>)
  })

  afterEach(()=>{
    renderResult.unmount()

    // タイマーを元のものに戻す
    jest.useFakeTimers()
  })

  // span要素のテキストが空であることを確認
  it('span要素のテキストが空であることを確認', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  it('入力直後は「入力中...」と表示されること', () => {
    const inputText = "テキスト"
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    
    fireEvent.change(inputNode, { target: { value: inputText } })
    
    // 入力中と表示するか
    expect(spanNode).toHaveTextContent('入力中...')
  })
  
  it('入力した1病後にはネイされること', async () => {
    const inputText = "テキスト"
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    
    fireEvent.change(inputNode, { target: { value: inputText } })

    // act関数内で実行することにより、タイマーのコールバック中で起きる状態変更が反映されることを保証する
    await act(() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  it('1秒後にonChangeイベントを呼び出す', async () => {
    const inputText = "テキスト"
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText } })

    await act(() => {
      jest.runAllTimers()
    })

    // 呼ばれたか確認
    expect(handleChange).toHaveBeenCalled()
  })
})
