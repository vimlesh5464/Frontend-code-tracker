import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Code Tracker!</h1>
      <p className="text-lg text-center mb-6">
        Solve coding challenges, track progress, and compete with others.
      </p>

      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">🔥 Features</h2>
        <ul className="list-disc space-y-2 text-lg pl-6">
          <li>💡 Browse a list of coding problems</li>
          <li>📊 Track your progress on the dashboard</li>
          <li>🏆 Compare scores on the leaderboard</li>
          <li>👤 Manage your profile & settings</li>
        </ul>
      </div>

      <div className="flex gap-4 mt-6">
        <Link to="/problems">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Start Solving Problems 🚀
          </button>
        </Link>
        {/* <Link to="/settings">
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
            Settings ⚙️
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;