import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { sidebarAdmin } from "../../routes";
import NavbarAdmin from "./NavbarAdmin";

const SidebarAdmin = () => {
  const location = useLocation();
  return (
    <div>
      <NavbarAdmin />
      <aside className="h-screen w-[15rem]">
        <nav className="h-full flex flex-col bg-white  shadow-sm">
          <div className="p-4 pb-2 flex justify-start items-center">
            <img src={Logo} alt="logo" className="w-10" />{" "}
            <span className="font-bold text-1xl text-color-1 ml-2">INVSMA</span>
          </div>
          <ul className="flex-1 px-3 mt-[1rem]">
            {sidebarAdmin.map((item) => (
              <div key={item.id} className="ml-[1rem]">
                <Link to={item.path}>
                  <li
                    className={`relative flex items-center py-2 px-3 my-2 font-medium  cursor-pointer transition-colors hover:bg-color-1 hover:text-white hover:rounded-md ${
                      location.pathname === item.path
                        ? "bg-color-1 text-white rounded-md"
                        : ""
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-5 hover:text-white"
                    />{" "}
                    <span className="ml-4 ">{item.title}</span>
                  </li>
                </Link>
              </div>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SidebarAdmin;
