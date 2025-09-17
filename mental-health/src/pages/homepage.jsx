import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const sampleVideos = [
  {
    title: "Managing Stress and Anxiety",
    description: "Learn techniques to reduce stress and anxiety effectively.",
    url: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    thumbnail: "https://img.youtube.com/vi/ysz5S6PUM-U/0.jpg",
  },
  {
    title: "Building Healthy Habits",
    description: "Form lasting positive habits to support your mental health.",
    url: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/0.jpg",
  },
  {
    title: "Mindfulness Techniques for Beginners",
    description: "A gentle introduction to mindfulness practices.",
    url: "https://www.youtube.com/watch?v=inpok4MKVLM",
    thumbnail: "https://img.youtube.com/vi/inpok4MKVLM/0.jpg",
  },
  {
    title: "How to Cope with Negative Thoughts",
    description: "Effective ways to challenge negative thinking patterns.",
    url: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    thumbnail: "https://img.youtube.com/vi/ZToicYcHIOU/0.jpg",
  },
];

function App() {
  const [userName, setUserName] = useState("Alex");
  const [journalSummary] = useState(
    "Today I felt a bit overwhelmed but managed to meditate for 10 minutes. Feeling slightly better."
  );
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="bg-white min-h-screen text-gray-800 p-6 font-sans">
      
      {/* Welcome Section */}
      <section className="text-center p-8 rounded-lg bg-gradient-to-r from-blue-100 via-green-100 to-blue-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hello, {userName}. How are you feeling today?
        </h1>
        <p className="text-gray-600">Take a moment for yourself 🌿</p>
      </section>

      {/* Guided Video Lectures Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">
          👉 Start Your Healing Journey with Expert-Guided Video Lectures
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video, idx) => (
            <div key={idx} className="border rounded shadow p-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              />
              <h3 className="font-semibold mt-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded max-w-2xl w-full">
              <button
                className="text-gray-600 float-right"
                onClick={() => setSelectedVideo(null)}
              >
                ✕ Close
              </button>
              <h3 className="text-xl font-semibold mb-2">{selectedVideo.title}</h3>
              <ReactPlayer url={selectedVideo.url} controls width="100%" />
            </div>
          </div>
        )}
      </section>

      {/* Daily Journal Snapshot */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">📓 Today's Journal Snapshot</h2>
        <p className="text-gray-700 italic">{journalSummary}</p>
        <button
          className="mt-3 px-4 py-2 bg-[#585182] text-white rounded hover:bg-[#48406a]"
        >
          View Full Journal
        </button>
      </section>

      {/* Community Spotlights */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">🌟 Community Spotlights</h2>
        <div className="overflow-x-auto flex space-x-4">
          {Array(5).fill(0).map((_, idx) => (
            <div key={idx} className="w-64 bg-gray-100 p-4 rounded shadow">
              <p className="italic">"Sharing my story helped me heal more than I expected!"</p>
              <button className="mt-2 px-3 py-1 bg-[#585182] text-white rounded">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-5 right-5 bg-[#585182] text-white p-4 rounded-full shadow-lg"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        🧠 Chat with AI Support
      </button>

      {showChatbot && (
        <div className="fixed bottom-20 right-5 bg-white border rounded shadow-lg p-4 w-80">
          <h3 className="font-semibold mb-2">AI Support Chat</h3>
          <div className="h-40 overflow-y-auto bg-gray-100 p-2 rounded mb-2">
            <p><em>How can I assist you today?</em></p>
          </div>
          <input
            type="text"
            placeholder="Type your concern..."
            className="w-full border p-2 rounded"
          />
          <button className="mt-2 px-4 py-2 bg-[#585182] text-white rounded w-full">
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
