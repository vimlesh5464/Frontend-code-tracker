import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") || "system");
  const [notifications, setNotifications] = useState(true);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");

  // Apply theme based on selection
  useEffect(() => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeChange = (theme) => {
    setDarkMode(theme);
    localStorage.setItem("darkMode", theme);
  };

  const handleSaveChanges = () => {
    alert("Settings saved successfully! ✅");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">⚙️ Settings</h2>

      {/* Account Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">👤 Account</h3>
        <div className="mt-2">
          <label className="block text-gray-700 dark:text-gray-300">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="mt-2">
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">🔒 Privacy</h3>
        <label className="flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            checked={privateProfile}
            onChange={() => setPrivateProfile(!privateProfile)}
            className="hidden"
          />
          <span className="mr-3 text-gray-700 dark:text-gray-300">Make Profile Private</span>
          <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ${privateProfile ? "bg-green-500" : ""}`}>
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${privateProfile ? "translate-x-5" : ""}`}></div>
          </div>
        </label>
      </div>

      {/* Theme Customization */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">🎨 Theme</h3>
        <div className="flex space-x-4 mt-2">
          <button onClick={() => handleThemeChange("light")} className={`px-4 py-2 rounded-lg ${darkMode === "light" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"}`}>Light</button>
          <button onClick={() => handleThemeChange("dark")} className={`px-4 py-2 rounded-lg ${darkMode === "dark" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"}`}>Dark</button>
          <button onClick={() => handleThemeChange("system")} className={`px-4 py-2 rounded-lg ${darkMode === "system" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-white"}`}>System</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">🔔 Notifications</h3>
        <label className="flex items-center cursor-pointer mt-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="hidden"
          />
          <span className="mr-3 text-gray-700 dark:text-gray-300">Enable Email Notifications</span>
          <div className={`w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 transition duration-300 ${notifications ? "bg-blue-500" : ""}`}>
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${notifications ? "translate-x-5" : ""}`}></div>
          </div>
        </label>
      </div>

      {/* Security Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300">🔑 Security</h3>
        <div className="mt-2">
          <label className="block text-gray-700 dark:text-gray-300">Change Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button onClick={handleSaveChanges} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Save Changes</button>
        {user && (
          <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Settings;
