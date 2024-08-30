import { useEffect, useState, useContext } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LogoWhite from "../../assets/images/logo2.png";
import { navigation } from "../../routes";
import { AuthContext } from "../../utils/context/AuthContext";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  const isLayananPage = location.pathname === "/test";

  const navbarStyle = {
    backgroundColor:
      isLayananPage || scrolled ? "#09412C" : "rgba(0, 0, 0, 0.0)",
  };

  return (
    <div
      className={`fixed flex justify-between items-center top-0 left-0 w-full z-50 px-5 md:px-[5rem] py-3 ${
        !scrolled ? "border-b border-color-1" : "shadow-md"
      } ${menuOpen ? "bg-white" : "md:bg-white"} bg-white md:bg-transparent`}
      style={
        window.innerWidth >= 768 ? navbarStyle : { backgroundColor: "#ffffff" }
      }
    >
      <div className="flex items-center">
        <Link to={"/"} className="block py-1">
          <img
            src={isLayananPage || scrolled || menuOpen ? LogoWhite : Logo}
            alt="logo-invsma"
            height={isLayananPage || scrolled || menuOpen ? 20 : 40}
            width={isLayananPage || scrolled || menuOpen ? 55 : 60}
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
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:static md:flex md:items-center md:justify-center md:bg-transparent md:transform-none z-40`}
      >
        <div className="flex flex-col items-center justify-center mt-20 md:mt-0 md:flex-row">
          {navigation.map((item) => (
            <Link
              to={item.url}
              key={item.id}
              className={`relative block text-2xl group transition-colors ${
                isLayananPage || scrolled || menuOpen
                  ? "text-white"
                  : "text-white"
              } ${
                item.onlyMobile ? "lg:hidden" : ""
              } px-3 py-3 pb-2 md:py-4 lg:mb lg:-mr-0.25 lg:text-[1rem] lg:font-semibold lg:leading-5 xl:px-8`}
              onClick={() => setMenuOpen(false)}
            >
              {item.title}
              <span
                className={`block ${
                  location.pathname === item.url
                    ? "h-0.5 bg-white mt-1 max-w-full"
                    : "max-w-0"
                } group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1`}
              ></span>
            </Link>
          ))}
        </div>
      </nav>
      <div className="hidden md:flex items-center px-7 gap-3">
        {user ? ( // Check if user is logged in
          <>
            <Link to="/dashboard">
              <button
                className={`button hidden mr-2 px-2 py-2 transition-colors group hover:bg-color-1 hover:rounded-md rounded-md border border-white ${
                  isLayananPage || scrolled
                    ? "text-white bg-transparent"
                    : "bg-transparent text-white"
                } lg:block font-bold`}
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
              <div
                className={`button hidden mr-2 px-2 py-2 transition-colors group hover:bg-color-1 hover:rounded-md ${
                  isLayananPage || scrolled ? "text-white" : "text-white"
                } lg:block font-bold`}
              >
                Masuk
              </div>
            </Link>
            <Link to="/register">
              <button
                className={`px-3 py-2 ${
                  isLayananPage || scrolled
                    ? "bg-color-2 text-color-1"
                    : "bg-color-1 text-white"
                } rounded-md w-[9rem] hover:bg-green-700`}
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
