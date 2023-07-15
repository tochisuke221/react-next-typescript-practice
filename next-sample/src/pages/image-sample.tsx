import { NextPage } from 'next'
import Image from 'next/image'

import ProteinImage from '../../public/images/protein.png'
import MacchoImage from '../../public/images/maccho.png'

const ImageSample: NextPage<void> = () => {
    return (
      <div>
        <h1>マッチョ画像</h1>
        <p>imgタグで表示</p>
        <img src="/images/protein.png" alt="プロイテイン" />
        <img src="/images/maccho.png" alt="マッチョ" />
        
        <p>Imageコンポーネントで表示した場合</p>
        <Image src={ProteinImage} alt="プロテイン"></Image>
        <Image src={MacchoImage} alt= "マッチョ"></Image>
      </div>
    )
}

export default ImageSample
