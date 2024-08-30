import Project from "../components/LandingPage/Project";
import NavbarUser from "../layout/NavbarUser";
import Footer from "../layout/Footer";

const Bisnis = () => {
  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] flex justify-center">
        <div className="transaction  w-[70rem]">
          <Project />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bisnis;
