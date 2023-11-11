import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='bg-yellow-500 p-2 text-2xl font-semibold text-pink-600'>
            <ul className='flex justify-evenly rounded-full'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/user">User</Link>
                </li>
                <li>
                    <Link href="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar