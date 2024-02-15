import BlogCard from '@/components/BlogCard';
import blogs from '@/config/blogs';

const page = async () => {
    return (
        <main>
            <h1>My Blogs</h1>
            <h3>Here are some of my blogs</h3>

            <section className="mx-auto mt-8 grid max-w-screen-md gap-4 md:grid-cols-1 md:gap-8">
                {blogs.map(BlogCard)}
            </section>
        </main>
    );
};

export default page;
