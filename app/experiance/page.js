'use client';

import experiances from '@/config/experiances';
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const page = () => {
    return (
        <main>
            <h1>Experiance</h1>
            <h3>Want to connect? My inbox is always open!</h3>

            <section>
                <div className="relative mx-auto flex max-w-screen-lg flex-col gap-4">
                    <div className="absolute left-2.5 h-full w-1 -translate-x-1/2 bg-gray-400 md:left-1/2"></div>

                    {experiances.map((experiance, i) => (
                        <div
                            key={i}
                            className={`group relative ml-10 rounded-md bg-gray-700/75 p-4 md:w-[46%] md:p-6 md:odd:ml-auto md:even:ml-0`}
                        >
                            <h2 className="text-xl font-semibold md:text-2xl">
                                <span>{experiance.name}</span>
                            </h2>
                            <p className="text-lg text-gray-300">{experiance.description}</p>
                            <p className="mt-2 flex items-center gap-2 font-semibold">
                                <FaCalendarAlt /> <span>{experiance.year}</span>
                            </p>

                            <div className="absolute -left-[3.25rem] top-1/2 -translate-y-1/2 rounded-full bg-gray-50 md:left-auto  md:group-odd:-left-[14%] md:group-even:-right-[14%]">
                                <p className="m-3.5 text-lg text-black md:text-2xl">{experiance.icon}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <br />
            <br />
        </main>
    );
};

export default page;
