import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";

type ISRProps = {
  message: string
}

const ISR: NextPage<ISRProps> = (props) => {
  const { message } =props

  const router = useRouter()

  if(router.isFallback){
      return <div>Loading.....</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページ</p>
        <p>{ message }</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetServerSidePropsが実行されました`

  return {
    props: {
      message
    },
    revalidate: 60 // ページの有効期間を秒単位で指定
  }
}

export default ISR
