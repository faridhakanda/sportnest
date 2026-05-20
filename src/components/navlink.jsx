'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children, className, onClick }) => {
    const pathName = usePathname();
    const isActive = href === pathName;
    return (
        <Link onClick={onClick} className={`${isActive ? "border-b-2 border-purple-500" : ""} ${className}`} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;