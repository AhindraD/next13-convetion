"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUserPage = () => {
    //Programatic navigation
    const router = useRouter();
    return (
        <button
            onClick={() => router.push("/user")}
            className="btn btn-primary">
            Create
        </button>
    )
}

export default NewUserPage