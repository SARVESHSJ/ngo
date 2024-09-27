import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react"

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [commentText, setCommentText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [prevPostId, setPrevPostId] = useState(null);  // State for previous post ID
    const [nextPostId, setNextPostId] = useState(null);  
    const [replyText, setReplyText] = useState({});
    const [replyName, setReplyName] = useState({});

    const [replyingTo, setReplyingTo] = useState(null);

    // Fetch post and comments from backend
    useEffect(() => {
        const fetchPostAndComments = async () => {
            try {
                const postResponse = await fetch(`http://localhost:8080/posts/${id}`);
                const postData = await postResponse.json();
                setPost(postData);
                console.log(postData);
                const commentsResponse = await fetch(`http://localhost:8080/posts/${id}/comments`);
                const commentsData = await commentsResponse.json();
                console.log(commentsData);
                setComments(commentsData);
            } catch (error) {
                console.error("Error fetching post and comments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPostAndComments();
    }, [id]);

    // Fetch previous and next post IDs
    useEffect(() => {
        const fetchNeighborPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/posts/${id}/neighbors`);
                const { prevPostId, nextPostId } = await response.json();
                setPrevPostId(prevPostId);
                setNextPostId(nextPostId);
            } catch (error) {
                console.error("Error fetching neighbor posts:", error);
            }
        };

        fetchNeighborPosts();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newComment = {
            postId: post.id,
            name,
            email,
            content: commentText,
        };

        try {
            const response = await fetch(`http://localhost:8080/posts/${id}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newComment),
            });

            if (response.ok) {
                const addedComment = await response.json();
                setComments([...comments, addedComment]);
                setCommentText("");
                setName("");
                setEmail("");
            } else {
                console.error("Error adding comment");
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    const handleReplySubmit = async (commentId, e) => {
        e.preventDefault();

        const newReply = {
            commentId,
            reply: replyText[commentId] || "",
            name: replyName[commentId] || ""
        };

        try {
            const response = await fetch(`http://localhost:8080/comments/${commentId}/replies`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReply),
            });

            if (response.ok) {
                const addedReply = await response.json();
                setComments(comments.map(comment => 
                    comment.id === commentId 
                    ? { ...comment, replies: [...comment.replies, addedReply] }
                    : comment
                ));
                setReplyText({ ...replyText, [commentId]: "" });
                setReplyName({ ...replyName, [commentId]: "" });
            } else {
                console.error("Error adding reply");
            }
        } catch (error) {
            console.error("Error submitting reply:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found.</div>;
    }
    
    return (
        <div>
            {/* Post Details */}
            <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg">
                <h1 className="text-3xl font-semibold mb-2">{post.title}</h1>
                <div className="flex items-center space-x-2 text-gray-500 mb-6">
                    <span>By {post.authorName} / {post.createdAt}</span>
                </div>
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="mb-4" />}
                {/* <p className="text-lg text-gray-600">{post.content}</p> */}
                {post.content && (
    <div>
        {JSON.parse(post.content).map((section, index) => (
            <div key={index} className="mb-6">
                {/* Render the heading if it exists */}
                {section.heading && <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>}
                
                {/* Split content by asterisk (*) or bullet point (•) and add line breaks */}
                 {/* Render content with asterisks */}
                 <div className="text-lg text-gray-600">
                    {section.content.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                            {line.split(/(\*[\s]|•[\s])/).map((segment, j) => (
                                <React.Fragment key={j}>
                                    {/* Display asterisk and content on the same line */}
                                    {segment.trim() === '*' ? (
                                        <span className="font-semibold">{segment}</span>
                                    ) : 
                                    segment.trim() === '•' ? (
                                        <span className="font-semibold">•</span>
                                    ) :(
                                        <span>{segment}</span>
                                    )}
                                </React.Fragment>
                            ))}
                            {/* Add a line break between lines */}
                            { i < section.content.split('\n').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        ))}
            </div>
        )}
            </div>

            {/* Comments Section */}
            <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">{comments.length} {comments.length === 1 ? "Comment" : "Comments"}</h2>
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="mb-6 flex flex-col items-start">
                            <div className="flex items-start">
                                <img src="https://www.gravatar.com/avatar?d=mp&s=64" alt="avatar" className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    <div className="flex items-center space-x-2">
                                        <span className="font-semibold text-red-600">{comment.name}</span>
                                        {/* <span className="text-gray-500 text-sm">{comment.time}</span> */}
                                    </div>
                                    <p className="text-gray-600 mt-2">{comment.content}</p>

                                    {/* Replies */}
                                    {comment.replies && comment.replies.length > 0 && (
                                        <div className="mt-4 ml-8">
                                            <h3 className="text-lg font-semibold mb-2">Replies</h3>
                                            {comment.replies.map((reply) => (
                                                <div key={reply.id} className="mb-4">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="font-semibold text-blue-600">{reply.name}</span>
                                                        <span className="text-gray-500 text-sm">{reply.time}</span>
                                                    </div>
                                                    <p className="text-gray-600 mt-2">{reply.reply}</p>
                                                </div>
                                            ))}
                                        </div>
                                        
                                    )}

                                    {/* Reply Form */}
                                    <form className="mt-4 ml-8" onSubmit={(e) => handleReplySubmit(comment.id, e)}>
                                    <input
     type="text"
        className="w-full p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
        placeholder="Your Name"
        value={replyName[comment.id] || ""}
        onChange={(e) => setReplyName({ ...replyName, [comment.id]: e.target.value })}
        required
    />
                                        <textarea
                                            className="w-full p-2 border border-gray-500 focus:outline-none focus:border-blue-500"
                                            rows="3"
                                            placeholder="Type your reply..."
                                            value={replyText[comment.id] || ""}
                                            onChange={(e) =>
                                                setReplyText({ ...replyText, [comment.id]: e.target.value })
                                            }
                                            required
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors mt-2"
                                        >
                                            Reply
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">No comments yet.</p>
                )}

                {/* Comment Form */}
                <h2 className="text-2xl font-semibold mb-4 mt-8">Leave a Comment</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-4 border border-gray-500 focus:outline-none focus:border-blue-500"
                        rows="5"
                        placeholder="Type your comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                    ></textarea>
                    <input
                        type="text"
                        className="w-full p-3 border border-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="Name*"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="w-full p-3 border border-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors"
                    >
                        Post Comment
                    </button>
                </form>
            </div>

            {/* Navigation Links */}
            <div className="max-w-2xl mx-auto my-10 flex justify-between">
                {prevPostId && (
                    <Link to={`/blog/${prevPostId}`} className="text-blue-600 hover:underline">
                        &larr; Previous Post
                    </Link>
                )}
                {nextPostId && (
                    <Link to={`/blog/${nextPostId}`} className="text-blue-600 hover:underline">
                        Next Post &rarr;
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Post;
