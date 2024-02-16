const Skills = () => {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Git',
        'Tailwind',
        'Prisma',
        'MongoDB',
        'Redux',
        'Express',
        'MySql',
        'Python',
        'FireBase',
        'Figma',
        'PUG',
        'SASS',
        'JQuery',
        'NPM',
        'Three.js',
        'Linux',
        'GSAP',
    ];

    return (
        <section>
            <h3>
                <span className="text-gradient">My Skills</span>
            </h3>

            <div className="mx-auto flex max-w-screen-md flex-wrap justify-center gap-2.5 md:gap-3">
                {skills.map(skill => (
                    <p
                        data-aos="zoom-in-up"
                        className="rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium shadow-md shadow-black/75 transition hover:scale-110 hover:bg-primary-600 hover:shadow-lg hover:shadow-black md:px-6 md:py-2.5 md:text-lg"
                    >
                        {skill}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Skills;
