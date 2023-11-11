import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: {
        id: number;
    }
}
const UserDetails = ({ params: { id } }: Props) => {
    if (id > 11) notFound();
    return (
        <h1>
            UserDetails {id}
        </h1>
    )
}

export default UserDetails
