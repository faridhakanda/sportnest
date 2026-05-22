"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import NavLink from "./navlink";
import Image from "next/image";
import { Avatar } from "@heroui/react";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [isMobileNavbar, setIsMobileNavbar] = useState(true);
  // mobile menu function
  const handleMenuIcon = () => {
    setIsShowMenu(!isShowMenu);
    setIsMobileNavbar(!isMobileNavbar);
  }
  const handleMobileMenu = () => {
    setIsMobileNavbar(!isMobileNavbar);
    setIsShowMenu(!isShowMenu);
  }


  const { data: session } = authClient.useSession();
  //console.log(session, "session data it is coming from navbar; ");
  const user = session?.user;
  //console.log(user, "user info after login! coming navbar");
  //console.log(user.name, user.email, 'name and email')
//   console.log(user?.name, 'current user name');
//   console.log(user?.email, 'current user email');
  
//   const {data: session} = authClient.getSession();
//   console.log(session, 'ses');
//   const user = session?.user;
//   console.log(session, 'sessino');
  const handleLogout = async () => {
    await authClient.signOut();
  };

//   const handleLogoutAndMenu = () => {
    
//     handleMobileMenu,
//     handleLogout
//   }
  return (
    <div>
      <div className="flex justify-between md:justify-around items-center bg-slate-50 px-4 md:px-2 py-2 shadow-sm">
        <div>
          <Link
            href={"/"}
            className="font-bold text-3xl italic md:text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
          >
            <span className="text-yellow-700">S</span>port
            <span className="text-pink-700">N</span>est
          </Link>
        </div>
        <div className="md:hidden">
          {isShowMenu ? (
            <span onClick={handleMenuIcon}>
              <IoMdMenu />
            </span>
          ) : (
            <span onClick={handleMenuIcon}>
              <RxCross2 />
            </span>
          )}
        </div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-3 font-bold items-center">
          {user ? (
            <div className="flex space-x-3 items-center">
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/facilities"}>All Facility</NavLink>
              <NavLink href={"/add-facility"}>Add Facility</NavLink>
              <NavLink href={"/booking"}>Booking</NavLink>
              <NavLink href={"/my-facility"}>My Facility</NavLink>
              {/* <NavLink href={"/profile"}>{user?.name || "Profile"}</NavLink> */}
              <NavLink href={"/profile"}>
                <Image src="/avatar.png" alt="avatar" width={32} height={32} />
              </NavLink>
              <NavLink onClick={handleLogout} href={"/login"}>
                Logout
              </NavLink>
            </div>
          ) : (
            <div className="space-x-3">
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/facilities"}>All Facility</NavLink>
              <NavLink href={"/add-facility"}>Add Facility</NavLink>
              <NavLink href={"/login"}>Login</NavLink>
              <NavLink href={"/signup"}>SignUp</NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMobileNavbar ?  
        <div>
        </div>:
        <div className="flex font-bold md:hidden bg-slate-100 my-2 w-64 mx-2 list-none px-4 py-4">
          
           {user ? (
          <div className="space-y-3 ">
            <li className="">
              <NavLink onClick={handleMobileMenu} href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/facilities"}>All Facility</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/add-facility"}>Add Facility</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/booking"}>Booking</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/my-facility"}>My Facility</NavLink>
            </li>
            {/* <li>
              <NavLink onClick={handleMobileMenu} href={"/profile"}>{user?.name || "Profile"}</NavLink>
            </li> */}
            <li>
                <NavLink
                 href={"/profile"}
                 onClick={handleMobileMenu}
                >
                    <Image src="/avatar.png" alt="avatar" width={32} height={32} />
                </NavLink>
            </li>
            
            <li>
              <NavLink onClick={ async () => {
                setIsMobileNavbar(!isMobileNavbar),
                setIsShowMenu(!isShowMenu),
                await authClient.signOut()
              }} href={"/login"}>
                Logout
              </NavLink>
            </li>
          </div>
        ) : (
          <div className="space-y-3  ">
            <li >
              <NavLink onClick={handleMobileMenu} href={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/facilities"}>All Facility</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/add-facility"}>Add Facility</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/login"}>Login</NavLink>
            </li>
            <li>
              <NavLink onClick={handleMobileMenu} href={"/signup"}>SignUp</NavLink>
            </li>
          </div>
        )}
          
        
      </div>
      }
      
      {/* <div className="flex bg-lime-200 mt-2 md:hidden space-x-3"></div> */}
    </div>
  );
};

export default Navbar;
