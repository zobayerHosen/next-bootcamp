import BlogCard from "./components/BlogCard";

export default async function BlogPage() {

  const data = await fetch('https://api.vercel.app/blog');
  const posts = await data.json();

  console.log(posts)

  // Note: main ui component
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}  
    </div>
  );
};


