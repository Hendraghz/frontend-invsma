import Logo from "../../assets/images/Logo.png";
import { navigationUser } from "../../routes";
import { Link } from "react-router-dom";
import DropdownProfile from "../components/NavbarUser/DropdownProfile.jsx";

const NavbarUser = () => {
  return (
    <div className="fixed flex justify-between items-center top-0 left-0 w-full z-50 px-[5rem] border-b bg-white">
      <div className="flex items-center px-12 py-2 lg:px-18 xl:px-10 max-lg:py-4">
        <a href="" className="block py-1">
          <img src={Logo} alt="logo-invsma" height={40} width={40} />
        </a>
        <nav className="fixed top-[5rem] left-0 px-5 bottom-0 right-0 pl-[10rem]  lg:static lg:flex lg:mx-auto">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigationUser.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`relative block  text-2xl group   transition-color ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-3 py-3 md:py-4 lg:mb  lg:-mr-0.25 lg:text-[1rem] lg:font-semibold
                     lg:leading-5  xl:px-8`}
              >
                {item.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1"></span>
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex items-center px-7 gap-3">
        <Link to={"/login"}>
          <button
            href=""
            className="button hidden mr-2 px-2 py-2 transition-colors group hover:bg-gray-200 hover:rounded-md lg:block font-bold"
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
        </Link>
        <DropdownProfile />
      </div>
    </div>
  );
};

export default NavbarUser;
