'use client';

import Link from 'next/link';

const NavLinks = [
    { href: '/dashboard', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/dashboard', label: 'Projects' },
    { href: '/about', label: 'Blogs' },
    { href: '/about', label: 'Experiance' },
    { href: '/contact', label: 'Contact Me' },
];

const NavBar = () => {
    return (
        <header>
            <nav className="fixed left-1/2 top-5 flex w-11/12 -translate-x-1/2 flex-wrap justify-center space-x-4 rounded-full border border-gray-600 px-6 py-2 text-gray-300 backdrop-blur-lg md:w-max">
                {NavLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="hover:text-gray-100">
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default NavBar;
