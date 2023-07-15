 import { NextPage, GetStaticProps } from 'next'
 import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  
  return (
    <div>
      {process.env.NEXT_PUBLIC_TEST}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(process.env.TEST)
  console.log(process.env.NEXT_PUBLIC_TEST)
  
  return {
    props: {}
  }
}

export default EnvSample
