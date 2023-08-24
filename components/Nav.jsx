"use client";

import { Logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import AuthContext from "@/Utils/Auth";
import DropdownMenuItems from "@/Utils/DropdownMenuItems";
import { ChevronDown, Menu, X } from "lucide-react";

const Nav = () => {
  const { authData, logoutUser } = useContext(AuthContext);
  const menuRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef?.current?.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  return (
    <>
      <div className="w-full px-6 sm:px-10 py-3 bg-white flex flex-row items-center justify-between">
        <div className="w-full relative">
          <div className="w-full flex items-center justify-between">
            <Link
              href={"/"}
              className="text-2xl sm:text-3xl text-primary-orange flex"
            >
              Heri<span className="text-primary-blue">tians</span>{" "}
              <Image src={Logo} alt="Logo" className="w-7 sm:w-9 h-auto" />
            </Link>

            <div
              className="block md:block lg:hidden xl:hidden w-6 h-6"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              {showMenu ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </div>
          </div>

          {/*Mobile Nav*/}
          <div className="w-full bg-white">
            {showMenu && (
              <div
                ref={menuRef}
                className="absolute w-full bg-white p-4 rounded-lg mt-3 flex flex-col items-center justify-center z-30"
              >
                <Link
                  href="/"
                  className="mob_nav_link"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="mob_nav_link"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  About
                </Link>
                <Link
                  href="/team"
                  className="mob_nav_link"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Team
                </Link>
                <Link
                  href="/contact"
                  className="mob_nav_link"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  Contact Us
                </Link>
                {authData ? (
                  <>
                    <div className="mb-2">
                      <span
                        onMouseEnter={() => {
                          if (window.innerWidth < 0) {
                            setShowDropdown(false);
                          } else {
                            setShowDropdown(true);
                          }
                        }}
                        onMouseLeave={() => {
                          if (window.innerWidth < 0) {
                            setShowDropdown(false);
                          } else {
                            setShowDropdown(false);
                          }
                        }}
                        className="mob_nav_link flex items-center justify-center"
                      >
                        Services <ChevronDown className="w-5 h-5" />
                      </span>
                      {showDropdown && (
                        <div className="flex flex-col absolute bg-white rounded-lg border border-black/50 z-[200]">
                          {authData.role === "GOVTOff"
                            ? DropdownMenuItems.GOVTOff.map((item, index) => (
                                <Link
                                  href={item.path}
                                  key={index}
                                  className="mob_nav_link my-1 mx-2"
                                  onClick={() => {
                                    setShowMenu(false);
                                  }}
                                >
                                  {item.title}
                                </Link>
                              ))
                            : authData.role === "admin"
                            ? DropdownMenuItems.admin.map((item, index) => (
                                <Link
                                  href={item.path}
                                  key={index}
                                  className="mob_nav_link my-1 mx-2 p-2"
                                  onClick={() => {
                                    setShowMenu(false);
                                  }}
                                >
                                  {item.title}
                                </Link>
                              ))
                            : DropdownMenuItems.user.map((item, index) => (
                                <Link
                                  href={item.path}
                                  key={index}
                                  className="mob_nav_link my-1 mx-2"
                                  onClick={() => {
                                    setShowMenu(false);
                                  }}
                                >
                                  {item.title}
                                </Link>
                              ))}
                        </div>
                      )}
                    </div>

                    <button
                      className="orange_btn"
                      onClick={() => {
                        logoutUser();
                        setShowMenu(false);
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    className="orange_btn"
                    href="/login"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>

        {/*Desktop Nav*/}
        <div className="hidden md:hidden lg:flex xl:flex items-center justify-end">
          <Link href="/" className="nav_link">
            Home
          </Link>
          <Link href="/about" className="nav_link">
            About
          </Link>
          <Link href="/team" className="nav_link">
            Team
          </Link>
          <Link href="/contact" className="nav_link">
            Contact Us
          </Link>
          {authData ? (
            <>
              <div
                onMouseEnter={() => {
                  if (window.innerWidth < 0) {
                    setShowDropdown(false);
                  } else {
                    setShowDropdown(true);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth < 0) {
                    setShowDropdown(false);
                  } else {
                    setShowDropdown(false);
                  }
                }}
              >
                <span className="nav_link flex items-center justify-center">
                  Services <ChevronDown className="w-5 h-5" />
                </span>
                {showDropdown && (
                  <div className="flex flex-col absolute bg-white rounded-lg border border-black/50">
                    {authData.role === "GOVTOff"
                      ? DropdownMenuItems.GOVTOff.map((item, index) => (
                          <Link
                            href={item.path}
                            key={index}
                            className="nav_link my-1"
                          >
                            {item.title}
                          </Link>
                        ))
                      : authData.role === "admin"
                      ? DropdownMenuItems.admin.map((item, index) => (
                          <Link
                            href={item.path}
                            key={index}
                            className="nav_link my-1"
                          >
                            {item.title}
                          </Link>
                        ))
                      : DropdownMenuItems.user.map((item, index) => (
                          <Link
                            href={item.path}
                            key={index}
                            className="nav_link my-1"
                          >
                            {item.title}
                          </Link>
                        ))}
                  </div>
                )}
              </div>

              <div className="ml-3">
                <button className="orange_btn" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="ml-3">
              <Link className="orange_btn" href="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
