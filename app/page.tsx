import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Hi Mom & Dad</h1>
      <Link href="/user">user-page</Link>
      <br />
      <a href="/user/new">user-page-new</a>
    </main>
  )
}
