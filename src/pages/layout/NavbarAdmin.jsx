import { Link} from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import DropdownProfile from "../components/NavbarUser/DropdownProfile.jsx";
import Notifikasi from "../components/Notification.jsx";

const NavbarAdmin = () => {

  return (
    <div className="fixed flex justify-between items-center top-0 left-0 w-full z-50 px-[5rem] border-b bg-white">
      <div className="flex items-center px-12 py-2 lg:px-18 xl:px-10 max-lg:py-4">
        <Link to={"/"} className="block py-1">
          <img src={Logo} alt="logo-invsma" height={40} width={40} />
        </Link>
      </div>
      <div className="flex items-center px-7 gap-3">
        <Notifikasi />
        <DropdownProfile />
      </div>
    </div>
  );
};

export default NavbarAdmin;
