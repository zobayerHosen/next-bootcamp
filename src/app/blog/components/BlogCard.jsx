import Link from "next/link";

export default function BlogCard({ blog = {} }) {
    return (
        <div className="w-full max-w-md border border-amber-500 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-400 mb-2">{blog.title}</h2>

            {/* Content Preview */}
            <p className="text-gray-500 text-sm mb-3 line-clamp-3">
                {blog.content}
            </p>

            {/* Metadata */}
            <div className="text-xs text-gray-500 mb-4">
                <span className="mr-2">✍️ {blog.author}</span>
                <span>📅 {new Date(blog.date).toDateString()}</span>
            </div>

            {/* Category */}
            <span className="inline-block bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full mb-4">
                {blog.category}
            </span>

            {/* Details Button */}
            <div>
                <Link
                    href={`/blog/${blog.id}`}
                    className="inline-block bg-amber-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-amber-600 transition"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};