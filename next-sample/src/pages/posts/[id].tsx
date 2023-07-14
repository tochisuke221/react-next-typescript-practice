import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if(router.isFallback) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルド時に生成されました
        </p>
        <p>
          { `posts/${id}に対応するページです` }
        </p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<PostProps> = async() => {
  const paths = [
    {
      params: {
        id: '1'
      }
    },
    {
      params: {
        id: '2'
      }
    },
    {
      params: {
        id: '3'
      }
    },
    {
      params: {
        id: '4'
      }
    },
  ]

  // fallbackをfalseにするとpath定義以外のページは全て404になる
  return { paths, fallback: false }
}

interface PostParams extends ParsedUrlQuery{
    id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async(context) => {
  console.log(context)
  return {
    props: {
      id: context.params!['id'] // 非nullアサーション
    }
  }
}

export default Post
