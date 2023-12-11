import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {
  //getting session from server
  const session = await getServerSession(authOptions);
  return (
    <main className='flex flex-col gap-4'>
      <h1>Hi {session?.user?.name}</h1>
      <Link className='btn w-40' href="/user">user-page</Link>
      <Link className='btn w-40' href="/admin">admin-page</Link>
      <Link className='btn w-40' href="/upload">upload-page</Link>
      <ProductCard />
    </main>
  )
}
