"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [isMobileNavbar, setIsMobileNavbar] = useState(true);
  // mobile menu function
  const handleMenuIcon = () => {
    setIsShowMenu(!isShowMenu);
    setIsMobileNavbar(!isMobileNavbar);
  }
  const handleMobileMenu = () => {
    setIsMobileNavbar(true);
    setIsShowMenu(true);
  }


  const { data: session } = authClient.useSession();
  console.log(session, "session data");
  const user = session?.user;
  console.log(user, "user info after login!");

  const handleLogout = async () => {
    await authClient.signOut();
  };
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
        <div className="hidden md:flex space-x-3">
          {user ? (
            <div className="flex space-x-3">
              <Link href={"/"}>Home</Link>
              <Link href={"/facilities"}>All Facility</Link>
              <Link href={"/add-facility"}>Add Facility</Link>
              <Link href={"/my-facility"}>My Facility</Link>
              <Link href={"/profile"}>{user?.name || "Profile"}</Link>
              <Link onClick={handleLogout} href={"/login"}>
                Logout
              </Link>
            </div>
          ) : (
            <div className="space-x-3">
              <Link href={"/"}>Home</Link>
              <Link href={"/facilities"}>All Facility</Link>
              <Link href={"/add-facility"}>Add Facility</Link>
              <Link href={"/login"}>Login</Link>
              <Link href={"/signup"}>SignUp</Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      {isMobileNavbar ?  
        <div>
        </div>:
        <div className="flex md:hidden bg-slate-100 my-2 w-64 mx-2 list-none px-4 py-4">
          
           {user ? (
          <div className="">
            <li className="">
              <Link onClick={handleMobileMenu} href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/facilities"}>All Facility</Link>
            </li>
            <li>
              <Link href={"/add-facility"}>Add Facility</Link>
            </li>
            <li>
              <Link href={"/my-facility"}>My Facility</Link>
            </li>
            <li>
              <Link href={"/profile"}>{user?.name || "Profile"}</Link>
            </li>
            <li>
              <Link onClick={handleLogout} href={"/login"}>
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="space-y-3 font-bold ">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/facilities"}>All Facility</Link>
            </li>
            <li>
              <Link href={"/add-facility"}>Add Facility</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>SignUp</Link>
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
