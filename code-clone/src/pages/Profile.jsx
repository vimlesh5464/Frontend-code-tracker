import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  if (!user) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          You are not logged in!
        </h2>
        <Link
          to="/login"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-block"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={user.avatar || "https://via.placeholder.com/100"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-2 border-blue-500"
        />
      </div>

      {/* User Info */}
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          {user.name}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        {user.location && (
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            📍 {user.location}
          </p>
        )}
        {user.bio && (
          <p className="text-gray-500 dark:text-gray-400 mt-1">{user.bio}</p>
        )}
      </div>

      {/* Social Links */}
      {user.socials && (
        <div className="mt-4 flex justify-center space-x-4">
          {user.socials.twitter && (
            <a href={user.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Twitter
            </a>
          )}
          {user.socials.linkedin && (
            <a href={user.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <Link
          to="/edit-profile"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Edit Profile
        </Link>

        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Logout Confirmation */}
      {showLogoutConfirm && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center">
          <p className="text-gray-700 dark:text-gray-300">Are you sure you want to logout?</p>
          <div className="mt-3 flex justify-center space-x-4">
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Yes, Logout
            </button>
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
