import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
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
            <Contact />
            <br />
        </main>
    );
};

export default page;
