import { useEffect, useState, useContext, useRef } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import LogoWhite from "../../assets/images/logo4.webp";
import { navigation } from "../../routes";
import { AuthContext } from "../../utils/context/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({
    layanan: false,
    informasi: false,
  });
  const submenuRefLayanan = useRef(null);
  const submenuRefInformasi = useRef(null);
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

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        submenuRefLayanan.current &&
        !submenuRefLayanan.current.contains(event.target) &&
        submenuRefInformasi.current &&
        !submenuRefInformasi.current.contains(event.target)
      ) {
        setSubmenuOpen({ layanan: false, informasi: false });
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
      className={`relative flex items-center justify-between top-0 left-0 w-screen z-50 px-5 md:px-[2rem] ${
        scrolled ? "shadow-md" : ""
      } ${menuOpen ? "bg-color-4" : "md:bg-transparent"}`}
      style={{ backgroundColor: "#374b47" }}
    >
      <div className="flex items-center">
        <Link to={"/"} className="block py-1">
          <img
            src={LogoWhite}
            alt="logo-invsma"
            className="w-20 md:w-28 h-auto py-1"
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
        className={`fixed top-0 left-0 w-full bg-color-4 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:justify-end md:bg-transparent md:transform-none z-40`}
      >
        <div
          className={`flex flex-col md:flex-row md:ml-auto items-center justify-center mt-20 md:mt-0`}
        >
          {navigation.map((item) => (
            <div
              key={item.id}
              className="relative w-full md:w-auto"
              ref={
                item.title === "Layanan"
                  ? submenuRefLayanan
                  : item.title === "Informasi"
                  ? submenuRefInformasi
                  : null
              }
            >
              <Link
                to={item.url}
                className={`block text-lg font-bold md:text-sm group transition-colors ${
                  isLayananPage || scrolled || menuOpen
                    ? "text-white"
                    : "text-white"
                } px-4 py-3 md:py-4`}
                onClick={
                  item.title === "Layanan"
                    ? () => toggleSubmenu("layanan")
                    : item.title === "Informasi"
                    ? () => toggleSubmenu("informasi")
                    : null
                }
              >
                {item.title}
                <span
                  className={`block ${
                    location.pathname === item.url
                      ? "h-0.5 bg-color-2 mt-1 max-w-full"
                      : "max-w-0"
                  } group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-2 mt-1`}
                ></span>
              </Link>
              {item.submenu && submenuOpen[item.title.toLowerCase()] && (
                <div className="flex flex-col absolute top-full left-0 w-full bg-white shadow-md mt-2 z-50">
                  {item.submenu.map((submenuItem) => (
                    <Link
                      key={submenuItem.id}
                      to={submenuItem.url}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        setSubmenuOpen({ layanan: false, informasi: false });
                      }}
                    >
                      {submenuItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <p className="text-white text-4xl px-4">/</p>
          <div className="px-4">
            <a href="https://wa.me/6281286197142" className="text-white group">
              <p>0812-8619-7142</p>
              <span
                className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-2 mt-1`}
              ></span>
            </a>
          </div>
        </div>
      </nav>

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          <>
            <Link to="/dashboard">
              <button className="px-3 py-2 transition-colors bg-transparent text-black hover:bg-color-1 hover:text-white rounded-md">
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
              <div className="mr-2 px-8 py-3 border font-semibold border-white rounded-md transition-colors text-white hover:bg-color-2 hover:text-color-1">
                Masuk
              </div>
            </Link>
            <Link to="/register">
              <button className="px-8 py-3 border font-semibold border-white  rounded-md transition-colors text-white hover:bg-color-2 hover:text-color-1 whitespace-nowrap">
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
