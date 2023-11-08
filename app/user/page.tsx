import React from 'react'
import UserTable from './UserTable'


interface Props {
    searchParams: {
        sortType: string;
    }
}
const UserPage = ({ searchParams: { sortType } }: Props) => {
    return (
        <>
            <h1>UserPage</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <UserTable sortType={sortType} />
        </>
    )
}

export default UserPage