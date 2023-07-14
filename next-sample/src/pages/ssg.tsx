import { NextPage } from 'next'
import Head from 'next/head'

type SSGProps = {}

const SSG: NextPage<SSGProps> = (props) => {
  console.log('生成')
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されたページです
        </p>
      </main>

    </div>
  )
}

export default SSG
