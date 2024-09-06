import { useEffect, useState, useContext, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoWhite from "../../assets/images/Logo.png";
import { navigation } from "../../routes";
import { AuthContext } from "../../utils/context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // State untuk submenu
  const submenuRef = useRef(null); // Untuk referensi submenu
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen); // Toggle submenu saat di-klik
  };

  // Tutup submenu ketika di-klik di luar area submenu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setSubmenuOpen(false); // Tutup submenu
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isLayananPage = location.pathname === "/test";

  return (
    <div
      className={`relative flex items-center justify-between top-0 left-0 w-full z-50 px-5 md:px-[2rem] ${scrolled ? "shadow-md" : ""} ${menuOpen ? "bg-white" : "md:bg-transparent"}`}
      style={{ backgroundColor: "white" }}
    >
      <div className="flex items-center">
        <Link to={"/"} className="block py-1">
          <img
            src={LogoWhite}
            alt="logo-invsma"
            className="w-20 md:w-28 h-auto"
          />
        </Link>
      </div>

      <div className="flex items-center md:hidden z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black focus:outline-none"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Navbar Links and Menu */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:justify-end md:bg-transparent md:transform-none z-40`}
      >
        <div className={`flex flex-col md:flex-row md:ml-auto items-center justify-center mt-20 md:mt-0`}>
          {navigation.map((item) => (
            <div
              key={item.id}
              className="relative w-full md:w-auto"
              ref={item.title === "Layanan" ? submenuRef : null}
            >
              <Link
                to={item.url}
                className={`block text-lg font-bold md:text-sm group transition-colors ${isLayananPage || scrolled || menuOpen ? "text-gray-900" : "text-gray-900"} px-6 py-3 md:py-4`}
                onClick={item.title === "Layanan" ? toggleSubmenu : null}
              >
                {item.title}
                <span
                  className={`block ${location.pathname === item.url ? "h-0.5 bg-black mt-1 max-w-full" : "max-w-0"} group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1`}
                ></span>
              </Link>

              {item.title === "Layanan" && submenuOpen && (
                <div className="flex flex-col absolute top-full left-0 w-full bg-white shadow-md mt-2 z-50">
                  {item.submenu && item.submenu.map((submenuItem) => (
                    <Link
                      key={submenuItem.id}
                      to={submenuItem.url}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <Link to="/dashboard">
              <button
                className="px-3 py-2 transition-colors bg-transparent text-black hover:bg-color-1 hover:text-white rounded-md"
              >
                Dashboard
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-red-500 text-white rounded-md w-[5rem] hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="mr-2 px-8 py-3 border-2 font-semibold border-black rounded-md bg-white transition-colors hover:bg-color-1 hover:text-white">
                Masuk
              </div>
            </Link>
            <Link to="/register">
              <button
                className="px-8 py-3 border-2 font-semibold border-black bg-white rounded-md transition-colors hover:bg-color-1 hover:text-white whitespace-nowrap"
              >
                Daftar Sekarang
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
