"use client"
import React from 'react'

interface Props{
    error: Error;
    reset: () => void;
}
const ErrorPage = ({error, reset}:Props) => {
    console.log(error);

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-red-500'>Error: {error.message}</h1>
            <button onClick={reset} className='btn btn-error w-40'>Retry</button>
        </div>
    )
}

export default ErrorPage