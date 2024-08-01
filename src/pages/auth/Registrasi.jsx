import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth";

const Registrasi = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isScrolledToEnd, setScrolledToEnd] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    nik: "",
    nohp: "",
    npwp: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const modalContentRef = useRef(null);

  const { name, email, password, nik, nohp, npwp } = formData;

  const validateNIK = (nik) => /^\d{16}$/.test(nik);
  const validateNPWP = (npwp) => /^\d{16}$/.test(npwp);
  const validatePassword = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  const validateNoHP = (nohp) => /^\d{11,12}$/.test(nohp);

  const handleCheckboxClick = () => {
    setModalVisible(true);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
    if (scrollTop + clientHeight >= scrollHeight) {
      setScrolledToEnd(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setChecked(true);
  };

  useEffect(() => {
    if (isModalVisible) {
      modalContentRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (modalContentRef.current) {
        modalContentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isModalVisible]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateNIK(nik)) newErrors.nik = "NIK harus 16 angka.";
    if (!validateNPWP(npwp)) newErrors.npwp = "NPWP harus 16 angka.";
    if (!validatePassword(password))
      newErrors.password =
        "Password harus terdiri 8 Character dari angka, huruf Besar & Kecil.";
    if (!validateNoHP(nohp)) newErrors.nohp = "No HP harus 11 atau 12 angka.";
    if (!isChecked) newErrors.checkbox = "Anda harus menyetujui ketentuan.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        await register(formData);
        navigate("/Login");
      } catch (error) {
        console.log("Registration failed:", error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="shadow-xl flex w-[70rem] pt-[2rem]">
        <div className="flex justify-center w-full">
          <div className="title px-6 w-full">
            <div className="header flex justify-between">
              <div>
                <p className="font-bold text-3xl">Halaman Registrasi</p>
                <p className="font-normal">
                  Harap mengisi data di bawah dengan benar
                </p>
              </div>
              <div>
                <img src={logo} className="w-20" alt="Logo" />
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <div className="mt-[3rem] FORM">
                <div className="flex items-center gap-4 w-full">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="name"
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="email"
                      value={email}
                      onChange={onChange}
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      NIK
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="nik"
                      value={nik}
                      onChange={onChange}
                      placeholder="3170123123616xxx"
                      required
                    />
                    {errors.nik && <p className="text-red-500">{errors.nik}</p>}
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      No HP/WA
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="nohp"
                      value={nohp}
                      onChange={onChange}
                      placeholder="089123xxx"
                      required
                    />
                    {errors.nohp && (
                      <p className="text-red-500">{errors.nohp}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full">
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      NPWP
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="npwp"
                      value={npwp}
                      onChange={onChange}
                      placeholder="3170123123616xxx"
                      required
                    />
                    {errors.npwp && (
                      <p className="text-red-500">{errors.npwp}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <input
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="*****"
                      required
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                </div>
                <div className="Ketentuan mb-3 mt-3 flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                    checked={isChecked}
                    onChange={handleCheckboxClick}
                    required
                  />
                  <p>
                    Syarat setuju dengan ketentuan{" "}
                    <span className="font-bold">
                      (gulir kebawah sampai habis)
                    </span>
                  </p>
                  {errors.checkbox && (
                    <p className="text-red-500">{errors.checkbox}</p>
                  )}
                </div>
                {isModalVisible && (
                  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div
                      className="bg-white p-6 rounded-lg w-1/2 h-1/2 overflow-y-auto"
                      ref={modalContentRef}
                    >
                      <h2 className="text-2xl font-bold mb-4">Ketentuan</h2>
                      <p>
                        {/* Konten panjang yang dapat digulir */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris imperdiet bibendum. <br />
                        <br />
                        {/* Repeat content to simulate long text */}
                        Sed nisi magna, dictum ac faucibus et, luctus ut dolor.
                        Vivamus sit amet ullamcorper justo. <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris imperdiet bibendum. <br />
                        <br />
                        Sed nisi magna, dictum ac faucibus et, luctus ut dolor.
                        Vivamus sit amet ullamcorper justo. <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris imperdiet bibendum. <br />
                        <br />
                        Sed nisi magna, dictum ac faucibus et, luctus ut dolor.
                        Vivamus sit amet ullamcorper justo. <br />
                        <br />
                      </p>
                      {isScrolledToEnd && (
                        <button
                          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                          onClick={handleCloseModal}
                        >
                          Saya Setuju
                        </button>
                      )}
                    </div>
                  </div>
                )}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-3 py-2 bg-color-1 text-white rounded-md w-[12rem] mt-[2rem] mb-[1rem]"
                  >
                    Registrasi Sekarang
                  </button>
                </div>
              </div>
            </form>
            <div className="flex justify-center mb-[2rem]">
              <a href="">
                Sudah memiliki akun?{" "}
                <span className="text-blue-500">Login Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
