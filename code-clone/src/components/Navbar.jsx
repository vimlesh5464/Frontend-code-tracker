import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import useAuth from "../hooks/useAuth"; // Import useAuth

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  const { user, logout } = useAuth(); // Get user & logout from AuthContext

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            Code Tracker Code
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
            <Link to="/problems" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Problems</Link>
            <Link to="/leaderboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Leaderboard</Link>
            <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Profile</Link>
            <Link to="/settings" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">⚙️ Settings</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                Logout
              </button>
            ) : (
              <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
                Login
              </Link>
            )}

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-2">
          <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Home</Link>
          <Link to="/problems" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Problems</Link>
          <Link to="/leaderboard" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Leaderboard</Link>
          <Link to="/profile" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">Profile</Link>
          <Link to="/settings" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500">⚙️ Settings</Link>

          {user ? (
            <button onClick={logout} className="block w-full text-center px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login" className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
