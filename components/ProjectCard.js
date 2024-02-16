import Link from 'next/link';
import { FaBroadcastTower, FaGithub } from 'react-icons/fa';

const ProjectCard = props => {

    return (
        <div
            key={props.name}
            className="group relative overflow-hidden rounded-md border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-lg shadow-black/75 transition md:hover:scale-105 hover:shadow-xl hover:shadow-black md:p-6"
        >
            <div className="md:w-9/12">
                <h2 className="text-xl md:text-2xl font-semibold">{props.name}</h2>
                <p className="text-sm text-gray-300 md:text-base font-medium">{props.description}</p>

                <div className="mt-2 md:mt-4 flex flex-wrap gap-2">
                    {props?.topics?.map(topic => (
                        <p className="rounded-md bg-gray-600 px-2 py-0.5 md:py-1 text-xs text-gray-200" key={topic}>
                            {topic}
                        </p>
                    ))}
                </div>

                <div className="mt-6 flex gap-3  w-min">
                    <Link href={props.homepage} className="btn w-full bg-gray-100 text-sm text-gray-900 md:text-base">
                        <FaBroadcastTower />
                        <span>Live</span>
                    </Link>

                    <Link href={props.github} className="btn w-full text-sm md:text-base">
                        <span>GitHub</span>
                        <FaGithub />
                    </Link>
                </div>
            </div>

            {props.thumbnail && (
                <img
                    src={props.thumbnail}
                    className="absolute -bottom-4 -right-[12%] hidden h-48 -rotate-12 rounded-xl bg-gray-700 shadow-lg shadow-black/75 transition group-hover:-rotate-3 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-black md:block"
                />
            )}
        </div>
    );
};

export default ProjectCard;
