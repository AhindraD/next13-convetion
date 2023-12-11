'use client';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
    children:React.ReactNode
}
const AuthProvider = ({ children }: Props) => {
    return (
        <div>{children}</div>
    )
}

export default AuthProvider;