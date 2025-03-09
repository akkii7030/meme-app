import { useState, useEffect } from "react";
import axios from "axios";
import MemeCard from "../components/MemeCard";
import { motion } from "framer-motion";
import { FaFile } from "react-icons/fa";

export default function Explore() {
  const [memes, setMemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("likes");

  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
      } catch (error) {
        console.error("Error fetching memes:", error);
      }
    };
    fetchMemes();
  }, []);

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 drop-shadow-lg">
        Meme Explorer
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8 w-full max-w-4xl px-4">
        <input
          type="text"
          placeholder="Search memes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg shadow-md"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg shadow-md"
        >
          <option value="likes">Sort by Likes</option>
          <option value="date">Sort by Date</option>
        </select>
        <button className="flex items-center gap-2 p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg shadow-md hover:bg-gray-700">
          <FaFile /> Choose File
        </button>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredMemes.map((meme) => (
          <motion.div
            key={meme.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <MemeCard meme={meme} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}