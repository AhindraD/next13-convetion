import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';


interface Props {
    searchParams: {
        sortType: string;
    }
}
const UserPage = ({ searchParams: { sortType } }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <h1>UserPage</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <Link href={"user/new"} className='btn btn-secondary w-40'>New User</Link>
            <UserTable sortType={sortType} />
        </div>
    )
}

export default UserPage