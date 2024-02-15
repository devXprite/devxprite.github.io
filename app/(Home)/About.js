const About = () => {
    return (
        <section className="text-center" id="about">
            <h3>
                <span className="text-gradient">About Me</span>
            </h3>

            <div className="grid gap-8 md:grid-cols-[2fr_3fr] md:gap-16">
                <div className="grid grid-cols-2 items-center gap-4 md:gap-6">
                    {[0, 1, 2, 4].map(e => (
                        <div
                            key={e}
                            className="flex h-full items-center justify-center rounded-md border-2 border-gray-700 bg-gray-800 bg-gradient-to-br from-gray-700 to-gray-900 p-3"
                        >
                            <div>
                                <h4 className="text-2xl font-bold md:text-4xl">10+</h4>
                                <h5 className="text-xl md:text-2xl">Projects</h5>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-justify text-base md:text-left md:text-lg [&>p]:mb-6 ">
                    <p>
                        Hey there! My name is Prateek and I am currently a final year student with a huge interest in
                        web development. I have always been drawn to the world of coding and I am constantly looking for
                        ways to challenge myself and improve my skills. My experience in web development includes
                        working with Javascript, Express, React, NextJS, and Node.js to build user-friendly and
                        efficient web applications. I am particularly skilled in the MERN stack and have a strong
                        understanding of its components.
                    </p>
                    <p>
                        Apart from working on personal projects, I also love contributing to open source projects and
                        collaborating with other developers. I am always on the lookout for new opportunities to learn
                        and grow as a developer. Whether it's through challenging projects, workshops, or courses, I am
                        always eager to expand my knowledge and skills.
                    </p>
                    <p>
                        If you're interested in working together or just want to chat about all things web development,
                        feel free to connect with me.
                    </p>
                </div>
            </div>

            {/* <div className="text-justify text-base md:text-justify md:text-xl [&>p]:mb-6 max-w-screen-lg mx-auto">
                <p>
                    Hey there! My name is Prateek and I am currently a final year student with a huge interest in web
                    development. I have always been drawn to the world of coding and I am constantly looking for ways to
                    challenge myself and improve my skills. My experience in web development includes working with
                    Javascript, Express, React, NextJS, and Node.js to build user-friendly and efficient web
                    applications. I am particularly skilled in the MERN stack and have a strong understanding of its
                    components.
                </p>
                <p>
                    Apart from working on personal projects, I also love contributing to open source projects and
                    collaborating with other developers. I am always on the lookout for new opportunities to learn and
                    grow as a developer. Whether it's through challenging projects, workshops, or courses, I am always
                    eager to expand my knowledge and skills.
                </p>
                <p>
                    If you're interested in working together or just want to chat about all things web development, feel
                    free to connect with me.
                </p>
            </div> */}
        </section>
    );
};

export default About;
