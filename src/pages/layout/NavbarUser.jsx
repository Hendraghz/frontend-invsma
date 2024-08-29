import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { navigationUser } from "../../routes";
import DropdownProfile from "../components/NavbarUser/DropdownProfile.jsx";
import Notifikasi from "../components/Notification.jsx";

const NavbarUser = () => {
  const location = useLocation();

  return (
    <div className="fixed flex justify-between items-center top-0 left-0 w-full z-50 px-[2rem] border-b bg-color-2">
      <div className="flex items-center px-12 py-2 lg:px-18 xl:px-10 max-lg:py-4">
        <Link to={"/"} className="block py-1">
          <img src={Logo} alt="logo-invsma" height={40} width={40} />
        </Link>
        <nav className="fixed top-[5rem] left-0 px-5 bottom-0 right-0 pl-[6rem] lg:static lg:flex lg:mx-auto">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigationUser.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className={`relative block text-2xl group transition-color px-3 py-3 md:py-4 lg:mb lg:-mr-0.25 lg:text-[1rem] lg:font-semibold lg:leading-5 xl:px-8 ${
                  location.pathname === item.url
                    ? "text-color-1 font-extrabold"
                    : ""
                }`}
              >
                {item.title}
                <span
                  className={`block  ${
                    location.pathname === item.url
                      ? "h-0.5 bg-color-1 mt-1 max-w-full"
                      : "max-w-0"
                  } group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1`}
                ></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex items-center px-7 gap-3">
        <Notifikasi />
        <DropdownProfile />
      </div>
    </div>
  );
};

export default NavbarUser;
