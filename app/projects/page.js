import ProjectCard from '@/components/ProjectCard';
import axios from 'axios';

const projectsRepo = [
    {
        name: 'Search EX',
        repository: 'devXprite/SearchEx',
        thumbnail: 'https://github.com/devXprite/SearchEx/raw/main/public/images/page_1.png'
    },
    {
        name: 'Infoooze',
        repository: 'devxprite/infoooze',
        thumbnail: 'https://infoooze.js.org/images/screenshot1.png',
    },
    {
        name: 'MoviesPrix',
        repository: 'devXprite/MoviesPrix',
    },
    {
        name: 'Chat World',
        repository: 'devXprite/Chat-World',
    },
    {
        name: 'Httpfy',
        repository: 'devXprite/httpfy',
    },
    {
        name: 'GitVio',
        repository: 'devXprite/gitvio',
    },
];


const page = async () => {

    const projects = await Promise.all(
        projectsRepo.map(async project => {
            try {
                const { data } = await axios.get(`https://api.github.com/repos/${project.repository}`);
                return { ...data, ...project };
            } catch (error) {
                return project;
            }
        }),
    );

    console.log(projects);

    return (
        <main>
            <h1>My Projects</h1>
            <h3>Here are some of my projects</h3>

            <section className="mx-auto mt-8 grid max-w-screen-md gap-4 md:grid-cols-1 md:gap-8">
                {projects.map(ProjectCard)}
            </section>
        </main>
    );
};

export default page;
