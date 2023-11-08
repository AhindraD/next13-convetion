import React from 'react'

interface Props {
    params: {
        id: string;
    }
}
const UserDetails = ({ params: { id } }: Props) => {
    return (
        <div>
            UserDetails {id}
        </div>
    )
}

export default UserDetails
