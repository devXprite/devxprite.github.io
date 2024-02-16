import ProjectCard from '@/components/ProjectCard';
import projects from '@/config/projects';

const page = async () => {
    return (
        <main>
            <h1>My Projects</h1>
            <h3>Here are some of my projects</h3>

            <section className="mx-auto mt-8 grid max-w-screen-md gap-4 md:grid-cols-1 md:gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </section>
        </main>
    );
};

export default page;
