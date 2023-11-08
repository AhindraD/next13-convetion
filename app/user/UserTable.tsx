import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UserTable = async () => {

    const resp = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    //{ next: { revalidate: 10 } }    --> to revalidate after 10 seconds
    //{cache: 'no-store'}    --> to not cache

    const Users: User[] = await resp.json();

    return (
        <table className='table table-zebra'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>

            <tbody>
                {Users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable