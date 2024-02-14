import Link from 'next/link';
import { BsMouse } from 'react-icons/bs';

import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaNpm,
    FaMedium,
    FaCodepen,
    FaFigma,
    FaTelegram,
    FaDiscord,
    FaPatreon,
    FaDownload,
    FaPaperPlane,
} from 'react-icons/fa';

const Hero = () => {
    const profileLinks = [
        {
            href: 'hpps://example.com',
            icon: <FaGithub />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaLinkedin />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaTwitter />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaNpm />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaMedium />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaCodepen />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaFigma />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaTelegram />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaDiscord />,
        },
        {
            href: 'hpps://example.com',
            icon: <FaPatreon />,
        },
    ];

    return (
        <section className="relative my-0 flex min-h-screen max-w-screen-lg items-center justify-center text-center">
            <div>
                <h2 className="text-2xl text-gray-200 md:text-4xl">Hii, I am</h2>
                <h1 className="text-5xl md:text-7xl">
                    <span className="text-gradient">Prateek Singh</span>
                </h1>

                <p className="mt-6 text-sm text-gray-300 md:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui nemo aliquam autem reiciendis fuga
                    minus tempore nostrum. Amet quibusdam optio nulla ipsum placeat mollitia!
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5 text-2xl text-gray-300 md:gap-8 md:text-4xl">
                    {profileLinks.map(({ href, icon }, i) => (
                        <a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="transition duration-500 hover:rotate-[360deg] hover:scale-125 hover:text-primary-600"
                        >
                            {icon}
                        </a>
                    ))}
                </div>

                <div className="mt-16 flex flex-col justify-center gap-4 md:flex-row md:gap-12">
                    <button type="button" className="btn-gradient px-10 md:text-xl">
                        <span>Contact Me</span>
                        <FaPaperPlane />
                    </button>

                    <button type="button" className="btn px-10 md:text-xl">
                        <span>Download CV</span>
                        <FaDownload />
                    </button>
                </div>
            </div>

            <div className="absolute bottom-6 flex animate-bounce items-center font-semibold text-gray-300 md:text-xl">
                
                <Link href='#about' className='flex gap-2'>
                <BsMouse className="text-2xl text-primary-500" />
                Scroll Down
                </Link>
            </div>
        </section>
    );
};

export default Hero;
