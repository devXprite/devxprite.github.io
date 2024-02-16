'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const NavLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects/', label: 'Projects' },
    { href: '/blogs/', label: 'Blogs' },
    { href: '/exp/', label: 'Experiance' },
    { href: '/contact/', label: 'Contact Me' },
];

const NavBar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const pathname = usePathname();

    // console.log(isMenuOpen);

    return (
        <>
            <header className="fixed left-0 top-0 z-20 flex w-full items-center justify-center">
                <nav className="mt-4 hidden w-max flex-wrap justify-center space-x-1 rounded-full border border-gray-700/75 bg-gray-800/70 p-2 text-gray-300 shadow-lg shadow-black/25  backdrop-blur-lg md:flex">
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

                <div className="absolute right-0 top-0 z-20 ml-auto rounded-es-full bg-gray-900/50 backdrop-blur-sm md:hidden">
                    <div className="-translate-y-1/5 translate-x-1">
                        <Hamburger toggled={isMenuOpen} toggle={setisMenuOpen} size={20} />
                    </div>
                </div>

                <motion.div
                    initial={{ width: 0, height: '0px' }}
                    animate={isMenuOpen ? { width: '100vw', height: '100vh' } : { width: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto  overflow-hidden bg-gray-900/50 backdrop-blur-lg md:hidden"
                >
                    <div className="m-8 flex flex-col gap-8  p-4 pt-12">
                        {NavLinks.map(nav => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={
                                    isMenuOpen ?
                                        {
                                            opacity: 1,
                                        }
                                    :   {
                                            opacity: 0,
                                        }
                                }
                                transition={{ duration: 0.3, staggerChildren: 1 }}
                            >
                                <Link
                                    onClick={() => {
                                        setisMenuOpen(false);
                                    }}
                                    key={nav.href}
                                    href={nav.href}
                                    className="text-2xl font-semibold text-gray-300"
                                >
                                    {nav.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </header>
        </>
    );
};

export default NavBar;
