// src/components/Login.jsx
import logo from "../../assets/images/Logo.png";
import { useState, useContext } from "react";
import { AuthContext } from "../../utils/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate("/dashboard");
    } catch (error) {
      Swal.fire({
        title: "Good job!",
        text: "Username atau password anda salah",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="shadow-xl flex justify-between w-[50rem] pt-[2rem]">
        <div className="flex justify-center">
          <div className="title px-6">
            <p className="font-bold text-3xl">Halaman Login</p>
            <p className="font-normal">
              Harap mengisi email dan password dengan benar
            </p>
            <form onSubmit={onSubmit} className="mt-[3rem]">
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan kata email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={onChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan Password"
                  required
                />
              </div>
              <a href="" className="text-sm font-bold text-gray-500">
                Lupa Password?
              </a>
              <div>
                <button
                  type="submit"
                  className="px-3 py-2 bg-color-1 text-white rounded-md w-[12rem] mt-[2rem] mb-[1rem]"
                >
                  Masuk
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
