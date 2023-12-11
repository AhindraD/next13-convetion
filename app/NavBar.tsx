"use client";
import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Loading from './Loading';

const NavBar = () => {
    //getting session from client
    const { status, data: session } = useSession();

    return (
        <nav className='bg-yellow-500 p-2 text-2xl font-semibold text-pink-600 h-14'>
            <ul className='flex justify-evenly rounded-full m-auto'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/user">User</Link>
                </li>
                <li>
                    <Link href="/admin">Admin</Link>
                </li>
                <li>
                    {status === "loading" && <Loading />}
                    {status === "authenticated" && <p>{session?.user?.name}</p>}
                    {status === "unauthenticated" && <Link href="/api/auth/signin">Log In</Link>}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar