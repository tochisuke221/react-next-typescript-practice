import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkPage = () => {
  return (
    <div>
    <Link href="/ssr">
      Go to SSR
    </Link>

    <Link href="/ssr">
      <button>Jump to SSR</button>
    </Link>

    <Link href={
      {
        pathname: '/ssg',
        query: { keyword: 'hello' }
      }
    }>
      Go to SSG
    </Link>
    </div>

  )
}

export default LinkPage
