'use client';

import Link from 'next/link';
import { FaBroadcastTower, FaCodepen, FaGithub } from 'react-icons/fa';

const ProjectCard = props => {
    return (
        <div key={props.name} className="card group relative overflow-hidden" data-aos="zoom-in-up">
            <div className="md:w-9/12">
                <h2 className="text-xl font-semibold md:text-2xl">{props.name}</h2>
                <p className="text-sm font-medium text-gray-300 md:text-base">{props.description}</p>

                <div className="mt-2 flex flex-wrap gap-2 md:mt-4">
                    {props?.topics?.map(topic => (
                        <p className="rounded-md bg-gray-600 px-2 py-0.5 text-xs text-gray-200 md:py-1" key={topic}>
                            {topic}
                        </p>
                    ))}
                </div>

                <div className="mt-6 flex w-min  gap-3">
                    {props.homepage && (
                        <Link
                            href={props.homepage}
                            className="btn w-full bg-gray-100 text-sm text-gray-900 md:text-base"
                        >
                            <FaBroadcastTower />
                            <span>Live</span>
                        </Link>
                    )}

                    {props.github && (
                        <Link href={props.github} className="btn w-full text-sm md:text-base">
                            <span>GitHub</span>
                            <FaGithub />
                        </Link>
                    )}

                    {props.codepen && (
                        <Link href={props.codepen} className="btn w-full text-sm md:text-base">
                            <span>CodePen</span>
                            <FaCodepen />
                        </Link>
                    )}

                    {props.npm && (
                        <Link href={props.npm} className="btn w-full text-sm md:text-base">
                            <span>NPM</span>
                            <FaCodepen />
                        </Link>
                    )}
                </div>
            </div>

            {props.thumbnail && (
                <img
                    src={props.thumbnail}
                    className="absolute top-2  left-[70%] hidden h-48 -rotate-12 rounded-xl bg-gray-700 shadow-lg shadow-black/75 transition group-hover:-rotate-3 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-black md:block"
                />
            )}
        </div>
    );
};

export default ProjectCard;
