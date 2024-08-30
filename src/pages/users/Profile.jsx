import { useState } from "react";
import NavbarUser from "../layout/NavbarUser";
import Footer from "../layout/Footer";
import Logo from "../../assets/images/Logo.png";

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "Meizer",
    email: "test@gmail.com",
    nik: "3217891368172511614",
    phone: "082123671236",
    npwp: "3217891368172511614",
  });

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses simpan data
    closeModal();
  };

  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] px-10  pb-[3rem] border-l flex items-center justify-center w-full">
        <div className="wrap flex items-center justify-center w-screen">
          <div className="w-4/5 rounded-md px-10 py-4">
            <h1 className="font-bold text-color-1 text-md text-center">
              Halaman Profile
            </h1>
            <div className="w-full px-10 py-4 mt-[2rem] border border-gray-300 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={Logo}
                  alt=""
                  width={80}
                  className="px-2 py-2 rounded-full bg-gray-300"
                />
                <div className="personal-info">
                  <p className="text-md font-bold text-color-1">
                    {formData.name}
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Bussiness Team
                  </p>
                  <p className="text-sm font-normal text-gray-400">
                    Jakarta Pusat
                  </p>
                </div>
              </div>
              <button
                className="px-4 py-1 rounded-xl border border-gray-300 text-xs font-bold hover:bg-color-2  hover:text-color-1"
                onClick={openModal}
              >
                Edit
              </button>
            </div>
            <div className="w-full personal-information border border-gray-300 rounded-xl px-10 py-4 mt-[1rem]">
              <div className="w-full flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <p className="font-bold">Personal Information</p>
                </div>
                <button
                  className="px-4 py-1 rounded-xl border border-gray-300 text-xs font-bold hover:bg-color-2  hover:text-color-1"
                  onClick={openModal}
                >
                  Edit
                </button>
              </div>
              <div className="w-3/5">
                <div className="flex items-center justify-between mt-[2rem]">
                  <div>
                    <p className="text-sm text-gray-500">Nama Lengkap</p>
                    <p className="mt-1 text-color-1 font-semibold">
                      {formData.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Alamat Email</p>
                    <p className="mt-1 text-color-1 font-semibold">
                      {formData.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[2rem]">
                  <div>
                    <p className="text-sm text-gray-500">NIK</p>
                    <p className="mt-1 text-color-1 font-semibold">
                      {formData.nik}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">No HP/WA</p>
                    <p className="mt-1 text-color-1 font-semibold">
                      {formData.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[2rem]">
                  <div>
                    <p className="text-sm text-gray-500">NPWP</p>
                    <p className="mt-1 text-color-1 font-semibold">
                      {formData.npwp}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">
              Edit Personal Information
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  NIK
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  No HP/WA
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  NPWP
                </label>
                <input
                  type="text"
                  name="npwp"
                  value={formData.npwp}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
