import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1 className='my-4 font-bold text-3xl'>Hi Mom & Dad</h1>
      <Link className='link-success' href="/user">user-page</Link>
      <br />
      <ProductCard />
    </main>
  )
}
