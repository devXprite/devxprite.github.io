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
        <section className="flex min-h-screen items-center justify-center text-center max-w-screen-lg">
            <div>
                <h2 className="text-2xl md:text-4xl text-gray-200">Hii, I am</h2>
                <h1 className="text-5xl md:text-7xl">
                    <span className="text-gradient">Prateek Singh</span>
                </h1>

                <p className="mt-6 text-sm md:text-2xl text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos qui nemo aliquam autem reiciendis fuga
                    minus tempore nostrum. Amet quibusdam optio nulla ipsum placeat mollitia!
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-5 md:gap-8 text-2xl md:text-4xl text-gray-300">
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

                <div className="mt-16 flex flex-col md:flex-row justify-center gap-4 md:gap-12">
                    <button type="button" className="btn-gradient px-10 md:text-xl">
                        Contact Me
                    </button>

                    <button type="button" className="btn px-10 md:text-xl">
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
