import { useState, useEffect } from "react";
import axios from "axios";
import MemeCard from "../components/MemeCard";
import { motion } from "framer-motion";

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
    <div className="p-6 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Meme Explorer</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search memes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="likes">Sort by Likes</option>
          <option value="date">Sort by Date</option>
        </select>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredMemes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </motion.div>
    </div>
  );
}
