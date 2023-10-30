import React from 'react'

interface User {
    id: number;
    name: string
}

const UserPage = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", { next: { revalidate: 10 } });
    const Users: User[] = await resp.json();

    return (
        <>
            <h1>UserPage</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ol>{Users.map(user => <li key={user.id}>{user.name}</li>)}</ol>
        </>
    )
}

export default UserPage