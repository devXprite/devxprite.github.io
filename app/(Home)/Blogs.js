import BlogCard from '@/components/BlogCard';
import blogs from '@/config/blogs';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

const Blogs = () => {
    return (
        <section>
            <h3>
                <span className="text-gradient">My Blogs</span>
            </h3>

            <div className="mx-auto mt-8 grid max-w-screen-md gap-4 md:grid-cols-1 md:gap-8">
                {blogs.slice(0, 3).map(BlogCard)}

                <Link href={'/blogs'} className="btn mx-auto text-center">
                    <span>View All Blogs</span>
                    <MdArrowOutward className="animate" />
                </Link>
            </div>
        </section>
    );
};

export default Blogs;
