import { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/auth";
import Swal from "sweetalert2";

const Registrasi = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isScrolledToEnd, setScrolledToEnd] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confPasswordVisible, setConfPasswordVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const modalContentRef = useRef(null);
  const modalRef = useRef(null);

  const { name, email, password, confPassword, nik, phone, npwp } = formData;

  const validateNIK = (nik) => /^\d{16}$/.test(nik);
  const validateNPWP = (npwp) => /^\d{16}$/.test(npwp);
  const validatePassword = (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
  const validateNoHP = (phone) => /^\d{11,12}$/.test(phone);

  const handleCheckboxClick = () => {
    setModalVisible(true);
  };

  const handleScroll = () => {
    if (modalContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = modalContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight) {
        setScrolledToEnd(true);
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setChecked(true);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      modalContentRef.current.addEventListener("scroll", handleScroll);
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      if (modalContentRef.current) {
        modalContentRef.current.removeEventListener("scroll", handleScroll);
      }
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalVisible]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateNIK(nik)) newErrors.nik = "NIK harus 16 angka.";
    if (!validateNPWP(npwp)) newErrors.npwp = "NPWP harus 16 angka.";
    if (!validatePassword(password))
      newErrors.password =
        "Password harus terdiri 8 Character dari angka, huruf Besar & Kecil.";
    if (!validateNoHP(phone)) newErrors.phone = "No HP harus 11 atau 12 angka.";
    if (!isChecked) newErrors.checkbox = "Anda harus menyetujui ketentuan.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      try {
        await register(formData);
        navigate("/Login");
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Password dan Konfirmasi Password tidak sama",
          icon: "error",
        });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfPasswordVisibility = () => {
    setConfPasswordVisible(!confPasswordVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
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
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="nik"
                      value={nik}
                      onChange={onChange}
                      placeholder="3170123123616xxx"
                      minLength={16}
                      maxLength={16}
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
                      inputMode="numeric"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="phone"
                      value={phone}
                      onChange={onChange}
                      placeholder="089123xxx"
                      required
                      minLength={11}
                      maxLength={12}
                    />
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone}</p>
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
                      inputMode="numeric"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="npwp"
                      value={npwp}
                      onChange={onChange}
                      placeholder="3170123123616xxx"
                      required
                      minLength={16}
                      maxLength={16}
                    />
                    {errors.npwp && (
                      <p className="text-red-500">{errors.npwp}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Password
                    </label>

                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="password"
                      value={password}
                      onChange={onChange}
                      placeholder="*****"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="gray"
                          className="size-5"
                        >
                          <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="gray"
                          className="size-5"
                        >
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                    {errors.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full relative">
                    <label className="block mb-2 text-sm font-medium text-gray-900">
                      Konfirmasi Password
                    </label>
                    <input
                      type={confPasswordVisible ? "text" : "password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="confPassword"
                      value={confPassword}
                      onChange={onChange}
                      placeholder="*****"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm leading-5"
                      onClick={toggleConfPasswordVisibility}
                    >
                      {confPasswordVisible ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="gray"
                          className="size-5"
                        >
                          <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                          <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                          <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="gray"
                          className="size-5"
                        >
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path
                            fillRule="evenodd"
                            d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
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
                      className="bg-white p-6 rounded-lg w-1/2 h-1/2 overflow-y-auto relative"
                      ref={modalRef} // Assign ref to modal container
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-600"
                        onClick={() => setModalVisible(false)} // Close modal when "X" is clicked
                      >
                        &times;
                      </button>
                      <h2 className="text-2xl font-bold mb-4">Ketentuan</h2>
                      <div ref={modalContentRef}>
                        <p>
                          {/* Konten panjang yang dapat digulir */}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris imperdiet bibendum. <br />
                          <br />
                          {/* Repeat content to simulate long text */}
                          Sed nisi magna, dictum ac faucibus et, luctus ut
                          dolor. Vivamus sit amet ullamcorper justo. <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris imperdiet bibendum. <br />
                          <br />
                          Sed nisi magna, dictum ac faucibus et, luctus ut
                          dolor. Vivamus sit amet ullamcorper justo. <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris imperdiet bibendum. <br />
                          <br />
                          Sed nisi magna, dictum ac faucibus et, luctus ut
                          dolor. Vivamus sit amet ullamcorper justo. <br />
                          <br />
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Doloribus, optio. Ipsam dignissimos officia
                          molestiae voluptatibus, distinctio, corrupti non
                          obcaecati ad maxime at explicabo eos ipsa eaque
                          provident voluptas sed dolorem. Lorem ipsum dolor sit,
                          amet consectetur adipisicing elit. Nobis explicabo
                          repellendus magnam, dolor tempore eligendi libero ab
                          ipsam tenetur nostrum quae! Aut eligendi odio beatae
                          voluptatibus odit error sit similique!
                        </p>
                      </div>
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        onClick={handleCloseModal}
                      >
                        Saya Setuju
                      </button>
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
              <p>
                Sudah memiliki akun?{" "}
                <Link to={"/login"}>
                  <span className="text-blue-500">Login Sekarang</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
