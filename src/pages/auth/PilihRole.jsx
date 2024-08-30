import logo from "../../assets/images/Logo.png";
import perorang from "../../assets/images/Perorang.png";
import perusahaan from "../../assets/images/Perusahaan.png";
import { Link } from "react-router-dom";

const PilihRole = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="wrap shadow-xl px-10 py-10">
        <div className="flex justify-center">
          <img src={logo} alt="logo" width={55} />
        </div>
        <p className="font-bold text-color-1 text-2xl text-center">
          SEBELUM MELANJUTKAN
        </p>
        <p className="text-center">
          Silahkan memilih mengisi data diri berdasarkan kebutuhan dan juga
          keinginan anda
        </p>
        <img src="" alt="" />
        <div className=" flex justify-center w-[50rem] pt-[2rem] py-10 px-10 gap-10">
          <div className="flex justify-center">
            <a
              href=""
              className="w-[18rem] bg-color-1  rounded-md pt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100"
            >
              <div className="flex justify-center">
                <img
                  src={perusahaan}
                  alt="perorang"
                  className="w-[8rem] bg-white px-2 py-2 rounded-xl"
                />
              </div>
              <div className="text-2xl font-medium text-white text-center mt-[0.6rem]">
                Badan Hukum
              </div>
              <p className="text-center text-white text-xs font-light px-5 mt-[0.6rem] mb-[1rem]">
                Anda dapat melakukan investasi dan juga pengajuan project
              </p>
            </a>
          </div>
          <Link to={"/verifikasi-data"}>
            <div className="flex items-center justify-center">
              <a
                href=""
                className="w-[18rem] bg-color-1  rounded-md pt-[2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100 "
              >
                <div className="flex justify-center">
                  <img
                    src={perorang}
                    alt="perorang"
                    className="w-[8rem] bg-white px-2 py-2 rounded-xl"
                  />
                </div>
                <div className="text-2xl font-medium text-white text-center mt-[0.6rem]">
                  Individu
                </div>
                <p className="text-center text-white text-xs font-light px-5 mt-[0.6rem] mb-[1rem]">
                  Anda dapat melakukan investasi dan juga pengajuan project
                </p>
              </a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PilihRole;
