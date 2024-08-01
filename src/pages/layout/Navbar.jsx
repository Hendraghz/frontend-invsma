import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import LogoWhite from "../../assets/images/logo2.png";
import { navigation } from "../../routes";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  const isLayananPage = location.pathname === "/test";

  const navbarStyle = {
    backgroundColor: isLayananPage
      ? "#ffffff"
      : scrolled
      ? "#ffffff"
      : "rgba(0, 0, 0, 0.0)",
  };

  const navStyle = {
    backgroundColor: isLayananPage
      ? "#ffffff"
      : scrolled
      ? "#ffffff"
      : "rgba(0, 0, 0, 0.0)",
  };

  return (
    <div
      className={`fixed flex justify-between items-center top-0 left-0 w-full z-50 px-[5rem] ${
        !scrolled ? "border-b border-color-1" : "shadow-md"
      }`}
      style={navbarStyle}
    >
      <div className="flex items-center px-12 py-2 lg:px-18 xl:px-10 max-lg:py-4">
        <a href="" className="block py-1">
          <img
            src={isLayananPage || scrolled ? Logo : LogoWhite}
            alt="logo-invsma"
            height={isLayananPage || scrolled ? 20 : 40}
            width={isLayananPage || scrolled ? 55 : 60}
          />
        </a>
        <nav
          className="fixed top-[5rem] left-0 px-5 bottom-0 right-0 bg-n-8 lg:static lg:flex lg:mx-auto"
          style={navStyle}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className={`relative block text-2xl group transition-colors ${
                  isLayananPage || scrolled ? "text-black" : "text-white"
                } ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 py-3 md:py-4 lg:mb lg:-mr-0.25 lg:text-[1rem] lg:font-semibold lg:leading-5 xl:px-8`}
              >
                {item.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1"></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex items-center px-7 gap-3">
        <Link to="/login">
          <a
            href=""
            className={`button hidden mr-2 px-2 transition-colors group hover:bg-color2 hover:rounded-md ${
              isLayananPage || scrolled ? "text-black" : "text-white"
            } lg:block font-bold`}
          >
            Masuk
          </a>
        </Link>
        <Link to="/register">
          <button className="px-3 py-2 bg-color-1 text-white rounded-md">
            Daftar Sekarang
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
