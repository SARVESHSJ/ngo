import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PostCard = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const placeholderImage = "public/logo.png";
    useEffect(() => {
        // Fetch all posts from the backend
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:8080/posts/posts");
                const data = await response.json();
                console.log(data);
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full flex flex-wrap justify-center lg:justify-center gap-6 p-4">
    {posts.map((post) => (
        <div key={post.id} className="w-full sm:w-72 md:w-96 lg:w-80 flex flex-col justify-between max-w-sm bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 duration-300">
            <img
                className="w-full h-48  bg-cover bg-center "
                src={post.imageUrl || placeholderImage}
                alt={post.title}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-800">{post.title}</div>
                <p className="text-gray-600 text-sm mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="text-gray-700 text-base truncate ">{post.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/blog/${post.id}`} className="text-orange-600 hover:underline">Read More &raquo;</Link>
            </div>
        </div>
    ))}
</div>



    );
};

export default PostCard;
