const BlogCard = props => {
    return (
        <div className="group relative overflow-hidden rounded-md border border-gray-600 bg-gray-800 p-4 shadow-md shadow-black/75 transition hover:scale-105 hover:shadow-xl hover:shadow-black md:p-6">
            <h2 className="mb-2 text-lg md:text-xl text-gray-100 font-semibold line-clamp-2">{props.title}</h2>
            <p className="text-sm md:text-base text-gray-300 line-clamp-4 md:line-clamp-6">{props.description}</p>
        </div>
    );
};

export default BlogCard;
