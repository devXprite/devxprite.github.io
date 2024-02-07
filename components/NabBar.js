"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  return (
    <header>
      <nav className="flex fixed space-x-4 top-5 left-1/2 -translate-x-1/2 backdrop-blur-lg py-2 px-6 border border-gray-600 rounded-full text-gray-300">
        {NavLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-gray-100" >
            {label}
          </Link>)
        )}
      </nav>
    </header>
  );
};

export default NavBar;
