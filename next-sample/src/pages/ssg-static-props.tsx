import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props
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
        <p>
          { message }
        </p>
      </main>

    </div>
  )
}

// ビルド時に実行される
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestmp = new Date().toLocaleString()
  const message = `${timestmp}にgetStaticPropsが実行されました`

  return {
    props: {
      message
    }
  }
}

export default SSG
