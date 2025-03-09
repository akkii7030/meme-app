import { motion } from "framer-motion";

export default function MemeCard({ meme }) {
  return (
    <motion.div
      className="relative border rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 to-black text-white cursor-pointer transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={meme.url}
        alt={meme.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-center">
        <h2 className="text-lg font-semibold">{meme.name}</h2>
      </div>
    </motion.div>
  );
}