import { useState, useEffect } from "react";

export default function CommentSection({ memeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`meme-${memeId}-comments`)) || [];
    setComments(savedComments);
  }, [memeId]);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`meme-${memeId}-comments`, JSON.stringify(updatedComments));
    setNewComment("");
  };

  return (
    <div className="mt-4 p-4 bg-gradient-to-b from-black to-gray-800 rounded-lg shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-3">Comments</h2>
      <textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        onClick={handleAddComment}
        className="mt-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition"
      >
        Add Comment
      </button>
      <ul className="mt-4 space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="p-2 bg-gray-900 rounded-md">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
}