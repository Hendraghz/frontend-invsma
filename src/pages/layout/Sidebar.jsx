import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { sidebar } from "../../routes";
import NavbarUser from "./NavbarUser";

const Sidebar = () => {
  return (
    <div>
      <NavbarUser />
      <aside className="h-screen w-[15rem]">
        <nav className="h-full flex flex-col bg-white  shadow-sm">
          <div className="p-4 pb-2 flex justify-start items-center">
            <img src={Logo} alt="logo" className="w-10" />{" "}
            <span className="font-bold text-1xl text-color-1 ml-2">INVSMA</span>
          </div>
          <ul className="flex-1 px-3 mt-[1rem]">
            {sidebar.map((item) => (
              <div key={item.id} className="ml-[3rem]">
                <Link to={item.path}>
                  <li className="relative flex items-center py-2 px-3 my-2 font-medium rounded-md cursor-pointer transition-colors">
                    <img src={item.icon} alt={item.title} className="w-5" />{" "}
                    <span className="ml-4">{item.title}</span>
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

export default Sidebar;
