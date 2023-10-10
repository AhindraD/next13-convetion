import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hi Mom & Dad</h1>
      <Link href="/user">user-page</Link>
      <br />
      <ProductCard />
    </main>
  )
}
