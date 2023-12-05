import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main className='flex flex-col gap-4'>
      <h1>Hi Mom & Dad</h1>
      <Link className='btn w-40' href="/user">user-page</Link>
      <Link className='btn w-40' href="/admin">admin-page</Link>
      <Link className='btn w-40' href="/upload">upload-page</Link>
      <ProductCard />
    </main>
  )
}
