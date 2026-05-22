"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';

const MyProfilePage =  () => {
    const { data: session } = authClient.useSession();
    //const userName = user?.name;
    const user = session?.user;
    //console.log(user, 'user profile')
    return (
        <div className='text-center my-4'>
            <h2>My Profile</h2>
            <p>User Name: {user?.name}</p>
            <p>User Email: {user?.email}</p>
        </div>
    );
};

export default MyProfilePage;