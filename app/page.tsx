import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='flex-row'>
      <h1 className='my-4 font-bold text-3xl'>Hi Mom & Dad</h1>
      <Link className='block my-2' href="/user">user-page</Link>
      <Link className='block my-2' href="/admin">admin-page</Link>
      <ProductCard />
    </main>
  )
}
