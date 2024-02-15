import ProjectCard from '@/components/ProjectCard';
import projects from '@/config/projects';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const Projects = () => {
    return (
        <section>
            <h3><span className="text-gradient">My Projects</span></h3>

            <div className="mx-auto mt-8 grid max-w-screen-md gap-4 md:grid-cols-1 md:gap-8">
                {projects.slice(0, 3).map(ProjectCard)}

                <Link href={'/projects'} className="btn mx-auto text-center">
                    <span>View All Projects</span>
                    <MdArrowOutward className='animate' />
                </Link>
            </div>
        </section>
    );
};

export default Projects;
