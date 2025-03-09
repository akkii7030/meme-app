import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'Meme Lover',
    bio: 'I love memes!',
    profilePicture: '/images/default-profile.png',
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleChange = (key, value) => {
    setUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <Image
          src={user.profilePicture}
          alt="Profile"
          width={96}
          height={96}
          className="rounded-full mb-4 border-4 border-gray-600"
        />
        <div className="w-full text-center">
          {editMode ? (
            <input
              type="text"
              value={user.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 mb-2 text-center"
            />
          ) : (
            <h2 className="text-xl font-semibold">{user.name}</h2>
          )}
          {editMode ? (
            <textarea
              value={user.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              className="w-full p-2 border rounded bg-gray-700 border-gray-600 mt-2 text-center"
            />
          ) : (
            <p className="text-gray-300 mt-2">{user.bio}</p>
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={editMode ? handleSave : () => setEditMode(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg w-40"
        >
          {editMode ? 'Save' : 'Edit Profile'}
        </button>
      </div>
    </div>
  );
}
