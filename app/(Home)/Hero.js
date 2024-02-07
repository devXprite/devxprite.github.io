import { FaGithub, FaLinkedin, FaTwitter, FaNpm, FaMedium, FaCodepen } from 'react-icons/fa';

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
    ];

    return (
        <section className="flex min-h-screen items-center justify-center">
            <div className="max-w-screen-lg">
                <h3 className="text-4xl text-gray-200">Hii, I am</h3>
                <h2 className="text-6xl"><span className='text-gradient'>Prateek Singh</span></h2>

                <p className="mt-6 text-xl text-gray-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex dolore odit minima. Earum, explicabo
                    et. Quas reprehenderit eius suscipit consequatur facere mollitia voluptate repellat, numquam, dicta
                    culpa omnis? Ducimus, magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                    explicabo eligendi voluptate ut corporis vitae tempora maiores, quaerat facilis sequi!
                </p>

                <div className="mt-10 flex gap-8 text-4xl text-gray-300">
                    {profileLinks.map(({ href, icon }, i) => (
                        <a key={i} href={href} target="_blank" rel="noreferrer" className='hover:rotate-[360deg] hover:text-primary-600 hover:scale-125 transition duration-500'>
                            {icon}
                        </a>
                    ))}
                </div>

                <div className="flex justify-start gap-6 mt-14">
                    <button type='button' className='btn-gradient text-xl px-10' >
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
