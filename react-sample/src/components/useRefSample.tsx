import React, { useState, useRef } from "react";

// sleepの関数
const sleep = (ms: number) => new Promise( resolve => setTimeout(resolve, ms) )

const UPLOAD_DELAY = 5000

export const ImageUploader = () => {
  const inputImageRef = useRef<HTMLInputElement | null>(null)
  const fileRef = useRef<File | null>(null)
  const [message, setMessage] = useState<string | null>('')

  // テキストクリック時のイベント
  const onClickText = () => {
    if(inputImageRef.current !== null) {
      inputImageRef.current.click()
    }
  }

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if(files !== null && files.length > 0) {
      fileRef.current = files[0]
    }
  }

  const onClickUpload = async () => {
    if(fileRef.current !== null) {
      // 擬似API
      await sleep(UPLOAD_DELAY)

      setMessage(`${fileRef.current.name}のアップロードに成功しました`)
    }
  }

  return (
    <div>
      <p
        style={{  textDecoration: 'underline' }}
        onClick={onClickText}
      >
        画像をアップロード
      </p>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
        style={{visibility: 'hidden'}}
      />
      <br />
      <button onClick={onClickUpload}>アップロード！</button>
      {message !== null && <p>{message}</p>}
    </div>
  )
}
