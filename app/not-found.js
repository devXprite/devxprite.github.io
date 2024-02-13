import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const page = () => {
    return (
        <main className="flex items-center justify-center">
            <div className="max-w-screen-md text-center">
                <h1 className="text-center">
                    <span className="text-gradient text-8xl font-bold md:text-9xl">404</span>
                </h1>
                <h3 className="text-3xl text-gray-200 md:text-5xl">Page Not found!</h3>

                <p className="mt-4 text-base text-gray-400 md:mt-12 md:text-xl">
                    The page you are looking for does not exist. It may have been moved
                </p>

                <Link href={'/'} className="btn-gradient mt-6 md:mt-10">
                    <FaHome />
                    <span>Go to HomePage</span>
                </Link>
            </div>
        </main>
    );
};

export default page;
