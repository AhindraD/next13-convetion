import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortType: string
}

const UserTable = async ({ sortType }: Props) => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users", { cache: 'no-store' });
    //{ next: { revalidate: 10 } }    --> to revalidate after 10 seconds
    //{cache: 'no-store'}    --> to not cache

    let Users: User[] = await resp.json();

    if (sortType == "userName") {
        Users = sort(Users).asc(u => u.name);
    }
    if (sortType == "email") {
        Users = sort(Users).asc(u => u.email);
    }

    return (
        <>
            <h1>{sortType}</h1>
            <table className='table table-zebra'>
                <thead>
                    <tr>
                        <th>
                            <Link href={"/user?sortType=userName"}>Name</Link>
                        </th>
                        <th>
                            <Link href={"/user?sortType=email"}>Email</Link>
                        </th>
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
        </>
    )
}

export default UserTable