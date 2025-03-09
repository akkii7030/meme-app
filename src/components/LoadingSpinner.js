export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-300"></div>
    </div>
  );
}