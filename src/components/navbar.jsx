'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const {
        data: session,
    } = authClient.useSession()
    console.log(session, 'session data');
    const user = session?.user;
    console.log(user, 'user info after login!');
    
    
    const handleLogout = async()=> {
        await authClient.signOut()
    }
    return (
        <div className='flex justify-around items-center bg-slate-50 p-2 shadow-sm'>
            <div>
                
                <Link href={'/'} className='font-bold text-3xl italic md:text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'><span className='text-yellow-700'>S</span>port<span className='text-pink-700'>N</span>est</Link>
            </div>
            <div className='flex space-x-3'>
                {/* <Link href={'/'}>Home</Link>
                <Link href={'/add-facility'}>Add Facility</Link>
                <Link href={'/facilities'}>All Facility</Link>
                <Link href={'/my-facility'}>My Facility</Link>
                <Link href={'/contact'}>Contact</Link> */}
                {user ? 
                    <div className='flex space-x-3'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/facilities'}>All Facility</Link>
                        <Link href={'/add-facility'}>Add Facility</Link>
                        <Link href={'/my-facility'}>My Facility</Link>
                        <Link href={'/profile'}>{user?.name || "Profile"}</Link>
                        <Link onClick={handleLogout} href={'/login'}>Logout</Link>
                    </div>
                    :
                    <div className='space-x-3'>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/facilities'}>All Facility</Link>
                        <Link href={'/add-facility'}>Add Facility</Link>
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/signup'}>SignUp</Link>
                    </div>
                }
                
            </div>
        </div>
    );
};

export default Navbar;