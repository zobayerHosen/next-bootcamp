import Link from "next/link";

export async function generateStaticParams() {
  const posts = await fetch("https://api.vercel.app/blog");
  const post = await posts.json();

  return post.map((postId) => ({
    id: String(postId.id),
  }));
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://api.vercel.app/blog/${id}`);
  const blog = await res.json();

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Link href="/blog" className="text-gray-300 hover:text-gray-600">
          Blog
        </Link>
        <span className="text-gray-400">/</span>
        <span className="text-gray-400">{blog.title}</span>
      </div>

      {/* Golden Ratio Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.618fr] gap-10 items-start">
        {/* Main Content Area */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-500">{blog.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{new Date(blog.date).toDateString()}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium">
              {blog.category}
            </span>
            <span>By {blog.author}</span>
          </div>

          <p className="text-lg leading-relaxed text-gray-700">
            {blog.content}
          </p>
        </div>

        {/* Sidebar / Secondary Content */}
        <aside className="bg-gray-800 shadow-lg rounded-2xl p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold">About the Author</h2>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold">
              {blog.author?.charAt(0)}
            </div>
            <span className="text-gray-700">{blog.author}</span>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Category</h3>
            <p className="text-gray-600">{blog.category}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
