'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects/', label: 'Projects' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/exp/', label: 'Experiance' },
    { href: '/contact/', label: 'Contact Me' },
];

const NavBar = () => {
    const pathname = usePathname();

    return (
        <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-center">
            <nav className="flex flex-wrap justify-center space-x-1 md:border border-gray-700/75 bg-gray-800/70 p-1 text-gray-300 shadow-lg shadow-black/25 backdrop-blur-lg md:mt-4 md:w-max  md:rounded-full md:p-2">
                {NavLinks.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`rounded-full py-1 font-semibold hover:text-gray-100 md:px-4 md:text-lg ${pathname == href ? 'bg-gray-700 px-5' : 'px-2'} `}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default NavBar;
