import About from './About';
import Blogs from './Blogs';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';

const page = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <br />
        </main>
    );
};

export default page;
