import { useState, useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Swal from "sweetalert2";
import axios from "axios";
import logo from "../../assets/images/Logo.png";
import bg from "../../assets/images/bg-login.jpg";
import fb from "../../assets/DataDummy/facebook.png";
import { jwtDecode } from "jwt-decode";
import { ApiUrl } from "../../api/baseUrl.jsx";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await login(formData.email, formData.password);
      const token = localStorage.getItem("authTokens");
      const decoded = jwtDecode(token);
      if (decoded.role === "admin") {
        navigate("/dashboard-admin");
      } else {
        // Wrap this in a try-catch block to handle potential issues
        try {
          const response = await axios.post(`${ApiUrl}/verifikasi/cek`, {
            id_user: decoded.userId,
          });
          if (response.data && response.data.data) {
            if (response.data.data.status_verifikasi === "success") {
              navigate("/dashboard");
            } else if (response.data.data.status_verifikasi === "pending") {
              navigate("/status-verifikasi");
            }
          } else {
            throw new Error("Unexpected response structure");
          }
        } catch (innerError) {
          navigate("/pilih-role");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        title: "ERROR!",
        text: error.response?.data?.msg || "An error occurred during login.",
        icon: "error",
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSuccess = (credentialResponse) => {
    console.log("Login Success:", credentialResponse);
    const token = credentialResponse.credential;
    localStorage.setItem("authToken", token);
    loginWithGoogle(token);
    navigate("/pilih-role");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="shadow-xl flex justify-between w-[70rem] mt-[2rem]  md:h-[30rem] 2xl:h-[50rem] rounded-md bg-white">
        <div className="flex justify-center items-center w-[40rem] h-full">
          <button className="absolute flex items-center gap-4 font-bold -mt-[46rem] -ml-[30rem] hover:bg-color-1 hover:text-white px-2 py-2 rounded-md text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Kembali
          </button>
          <div className="title px-6">
            <p className="font-bold text-3xl">Halaman Login</p>
            <p className="font-normal">
              Harap mengisi email dan password dengan benar
            </p>
            <form onSubmit={onSubmit} className="mt-[3rem]">
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 xl:text-md">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-color-2 focus:border-color-1 block w-full p-2.5"
                  placeholder="Masukkan email"
                  required
                />
              </div>
              <div className="mb-3 relative">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan Password"
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
              </div>
              <a href="" className="text-sm font-bold text-gray-500">
                Lupa Password?
              </a>
              <div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-color-1 text-white rounded-md w-full mt-[2rem] mb-[1rem]"
                >
                  Masuk
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-3 mb-3">
              <span className="w-36 bg-gray-400 h-0.5 block"></span>
              <p className="px-2">Or login with</p>
              <span className="w-36 bg-gray-400 h-0.5 block"></span>
            </div>
            <GoogleOAuthProvider clientId="458402602412-ckbts9viu0mpn786une96i5gn4jtnv8j.apps.googleusercontent.com">
              <div className="flex items-center justify-between gap-3">
                <div className="mt-[2rem] mb-[1rem]">
                  <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 py-2 font-bold text-sm bg-white text-color-1 rounded-md w-full mt-[2rem] mb-[1rem] flex items-center justify-center text-nowrap gap-2 border border-gray-300 hover:bg-gray-100"
                >
                  <img src={fb} alt="facebook" className="w-4" />
                  Facebook
                </button>
              </div>
            </GoogleOAuthProvider>
            <p className="font-normal text-md mt-[2rem]">
              Belum Mempunyai Akun?
              <Link to={"/register"}>
                <span className="text-blue-500">Registrasi Sekarang</span>
              </Link>
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-center h-full w-[30rem]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[12rem] absolute -mt-[10rem]"
          />
          <div className="px-10 text-justify mt-[10rem]">
            <p className="font-bold text-2xl text-white uppercase">
              Selamat Datang Di INVSMA
            </p>
            <p className="font-normal mt-4 text-white">
              INSMA berkomitmen untuk membimbing Anda di jalur keuangan Syariah
              Anda dengan keahlian, kejujuran, dan sentuhan pribadi.
            </p>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default Login;
