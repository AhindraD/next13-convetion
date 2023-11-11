import React, { Children } from 'react'

interface Props {
    children: React.ReactNode
}
const AdminLayout = ({ children }: Props) => {
    return (
        <div className='flex'>
            <aside className='p-4 m-2 bg-slate-400 text-center'>Admin Sidebar</aside>
            <div>{children}</div>
        </div>
    )
}

export default AdminLayout;