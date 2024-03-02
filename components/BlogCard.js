const BlogCard = props => {
    return (
        <div
            data-aos="zoom-in-up"
            className="group relative card"
        >
            <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-100 md:text-xl">{props.title}</h2>
            <p className="line-clamp-4 text-sm text-gray-300 md:line-clamp-6 md:text-base">{props.description}</p>
        </div>
    );
};

export default BlogCard;
