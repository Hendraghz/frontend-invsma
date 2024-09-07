import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import image from "../assets/images/Kontak.webp";
const Kontak = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex justify-center w-full">
        <div className="bg-color-3 pt-[11rem] border-b-2 w-full">
          <div className="bg-color-1 w-fit px-5 py-5 text-white font-extrabold uppercase ml-[1rem]">
            Contact Page
          </div>
          <div className="bg-white py-12 w-3/4 px-6">
            <h1 className="text-5xl font-bold text-gray-900">
              Building Bridges for Sustainable and Inclusive Growth
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 flex justify-center">
        <div className="md:w-full 2xl:w-4/5">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-500 pb-[2rem]">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Text Section */}
              <div className="md:w-full  mb-6 lg:mb-0">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  To contact us, please complete the form below. We will use
                  your information to communicate with you regarding your
                  inquiry or request.
                </h1>
              </div>
            </div>
          </div>
          <div className="contact px-10 mt-[2rem]">
            <div className="title">
              <p className="font-semibold text-2xl text-color-black ">
                Get Started
              </p>
              <p className="mt-4 font-extrabold text-5xl">
                Schedule your personalized <br /> consultation today
              </p>
            </div>
            <div className="flex jusitfy-between items-start w-full mt-[4rem]">
              <img src={image} alt="kontak" className="w-[60rem]" />
              <div className="text text-center w-full">
                <p className="font-bold text-4xl">
                  We <br /> are <br /> better <br /> together.
                </p>
                <p className="mt-[8rem] text-normal text-black">
                  Drop your contact details into the form, and <br /> we’ll
                  reach out to you!
                </p>
              </div>
              <div className="absolute w-3/5 bg-white ml-[30rem] mt-[28rem] px-10">
                <div className="flex items-center gap-4 w-full mt-[1rem]">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-black block w-full p-2.5 h-12"
                      placeholder=""
                      required
                      name="nama_lengkap_pengurus"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full mt-[1rem]">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-black  block w-full p-2.5 h-12"
                      placeholder=""
                      required
                      name="nama_lengkap_pengurus"
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black  block w-full p-2.5 h-12"
                      placeholder=""
                      required
                      name="nama_lengkap_pengurus"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full mt-[1rem]">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-black  block w-full p-2.5 h-12"
                      placeholder=""
                      required
                      name="nama_lengkap_pengurus"
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-black  block w-full p-2.5 h-12"
                      placeholder=""
                      required
                      name="nama_lengkap_pengurus"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full mt-[1rem]">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Interested in
                    </label>
                    <select
                      id="countries"
                      name="jabatan"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-black  block w-full p-2.5 h-12 "
                    >
                      <option value=""></option>
                      <option value="Invesment Planning">
                        Invesment Planning
                      </option>
                      <option value="Komisaris">Retirement Planning</option>
                      <option value="Komisaris">Education Planning</option>
                      <option value="Komisaris">Portofolio Management</option>
                      <option value="Komisaris">Assets Location</option>
                      <option value="Komisaris">Risk Management</option>
                      <option value="Komisaris">Tax Planning</option>
                      <option value="Komisaris">Estate Planning</option>
                      <option value="Komisaris">Wealth Preservation</option>
                      <option value="Komisaris">Other</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full mt-[1rem]">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-lg font-semibold text-gray-900">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md  focus:ring-black  block w-full p-2.5"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center gap-4  mt-[1rem]">
                  <button className="px-6 py-3 border border-black hover:text-white hover:bg-color-1 font-bold">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="contact mt-[1rem] pb-[8rem]">
              <div className="title border-b border-gray-400 w-full pb-[1rem]">
                <p className="font-bold text-md text-gray-700">
                  OR REACH US AT :
                </p>
              </div>
              <div className="flex flex-col mt-[3rem]">
                <a href="" className="font-semibold text-lg text-gray-600">
                  Admin/ Customer Service: 0812-9230-0803
                </a>
                <a
                  href=""
                  className="font-semibold text-lg text-gray-600 mt-[1rem]"
                >
                  Email: admin@invsma.com
                </a>
                <div className="alamat mt-[1rem] text-gray-600">
                  <p className="font-extrabold text-xl">
                    PT INVESTMENT MUAMALAH ASIA (INVSMA)
                  </p>
                  <p className="mt-[1rem] font-semibold">Alamat</p>
                  <p className="w-[22rem] mt-[1rem] font-semibold">
                    Jl. Jend. Basuki Rachmat No.04 A, RT.4/RW.6, Cipinang Besar
                    Sel., Kecamatan Jatinegara, Kota Jakarta Timur, Daerah
                    Khusus Ibukota Jakarta 13410
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Kontak;
