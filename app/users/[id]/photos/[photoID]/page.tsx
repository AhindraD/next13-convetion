import React from 'react';

interface Props {
    params: {
        id: string;
        photoID: string;
    }
}


const UserPhotos = ({ params: { id, photoID } }: Props) => {
    return (
        <div>UserPhotos{id} photoID{photoID}</div>
    )
}

export default UserPhotos