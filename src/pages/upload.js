// src/pages/upload.js
import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset');

    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
      formData
    );
    console.log(response.data.secure_url); // Uploaded image URL
  };

  return (
    <div className="p-6 dark:bg-gradient-to-b from-gray-900 to-black text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Upload Meme</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <input type="file" onChange={handleFileChange} className="mb-4 w-full p-2 bg-gray-700 text-white border border-gray-600 rounded  🗃️" />
        {preview && (
          <img src={preview} alt="Preview" className="mb-4 w-full h-64 object-cover rounded-lg border border-gray-600" />
        )}
        <textarea
          placeholder="Add a funny caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded mb-4"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
}