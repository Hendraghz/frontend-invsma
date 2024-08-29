import { useState } from "react";

const Notifikasi = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Notification 1", read: false },
    { id: 2, text: "Notification 2", read: false },
    { id: 3, text: "Notification 3", read: false },
  ]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      <button
        className="button hidden mr-2 px-2 py-2 transition-colors group hover:bg-gray-200 hover:rounded-md lg:block font-bold"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <p className="text-sm font-bold">Notifications</p>
            <button
              className="text-xs text-blue-500 hover:underline"
              onClick={markAllRead}
            >
              Mark all read
            </button>
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`px-4 py-2 border-b ${
                  notification.read ? "bg-gray-100" : "bg-white"
                }`}
              >
                {notification.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifikasi;
