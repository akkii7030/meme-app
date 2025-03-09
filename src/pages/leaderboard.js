export default function Leaderboard() {
  const topMemes = [
    { id: 1, name: "Funny Meme 1", likes: 100 },
    { id: 2, name: "Funny Meme 2", likes: 90 },
    // Add more memes
  ];

  const topUsers = [
    { id: 1, name: "User 1", points: 500 },
    { id: 2, name: "User 2", points: 450 },
    // Add more users
  ];

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Top Memes</h2>
          <ul className="space-y-2">
            {topMemes.map((meme) => (
              <li key={meme.id} className="flex justify-between p-2 bg-gray-700 rounded-md">
                <span>{meme.name}</span>
                <span className="text-gray-400">{meme.likes} likes</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Top Users</h2>
          <ul className="space-y-2">
            {topUsers.map((user) => (
              <li key={user.id} className="flex justify-between p-2 bg-gray-700 rounded-md">
                <span>{user.name}</span>
                <span className="text-gray-400">{user.points} points</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
