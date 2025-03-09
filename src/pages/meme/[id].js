import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function MemeDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!id) return;
    const savedComments = JSON.parse(localStorage.getItem(`meme-${id}-comments`)) || [];
    setComments(savedComments);
  }, [id]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`meme-${id}-comments`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Meme Details</h1>
      <p className="text-center text-gray-400">Meme ID: {id}</p>
      <div className="mt-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Comments</h2>
        <textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={handleAddComment}
          className="mt-3 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition"
        >
          Add Comment
        </button>
        <ul className="mt-4 space-y-2">
          {comments.map((comment, index) => (
            <li key={index} className="p-3 bg-gray-900 rounded-md">
              {comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
