import { useState } from "react";
import NavbarUser from "../../layout/NavbarUser";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../../api/project/apiproject";
import Swal from "sweetalert2";
import { jwtDecode } from "jwt-decode";

const BuatPendanaan = () => {
  const token = localStorage.getItem("authTokens");
  const decoded = jwtDecode(token);
  const [formData, setFormData] = useState({
    id_user: decoded.userId || "", // Tambahkan id_user jika diperlukan
    nama: "",
    oleh: "",
    lokasi: "",
    desc: "",
    tercapai: 0,
    target: "",
    minimal: "",
    waktu_tersisa: "",
    tipe: "",
    tanggalPengajuan: "",
    nomorKTP: "",
    nomorHP: "",
    noWa: "",
    profilPerusahaan: "",
    legalitasPerusahaan: "",
    pemegangSaham: "",
    lokasiProject: "",
    urlLokasi: "",
    rencanaAnggaran: "",
    financialHighlights: "",
    laporanLabaRugi: "",
    analisaResiko: "",
    ktpFile: null,
    image: null,
    image_legal: null,
    image_pemegangSaham: null,
    image_rencanaAnggaran: null,
    image_finansial: null,
    image_labaRugi: null,
    image_analisaResiko: null,
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await createProject(data);
      Swal.fire({
        title: "Success",
        text: "Project successfully submitted!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/ajukan-pendanaan");
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className="pt-[5rem] flex justify-center w-screen">
        <div>
          <div className="title text-center">
            <p className="text-2xl font-bold text-color-1">
              Ajukan Pendaan di INVSMA
            </p>
            <p className="text-md font-normal text-black">
              Terimakasih anda sudah tertarik untuk mengajukan project di INVSMA
              anda dapat mengisi formulir dibawah ini dengan benar.
            </p>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <div className="form mt-[1rem]">
                <div className="mt-[2rem]">
                  <div className="mt-[3rem]">
                    <div className="datajabatan">
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nama Project
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            name="nama"
                            value={formData.nama}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Jenis Pendanaan yang di inginkan
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <select
                            name="tipe"
                            value={formData.tipe}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                            required
                          >
                            <option value="">Pilih Pendanaan</option>
                            <option value="Obligasi">Obligasi</option>
                            <option value="Saham">Saham</option>
                            <option value="Sukuk">Sukuk</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nama PT
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            name="oleh"
                            value={formData.oleh}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Lokasi
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            name="lokasi"
                            value={formData.lokasi}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="informasi mt-[1rem]">
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nomor KTP Pengaju
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="number"
                            name="nomorKTP"
                            value={formData.nomorKTP}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nomor HP Pengaju
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="number"
                            name="nomorHP"
                            value={formData.nomorHP}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Upload KTP Pengaju
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <div>
                            <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-8 h-8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                              </svg>

                              <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                                {formData.ktpFile
                                  ? formData.ktpFile.name
                                  : "Upload File"}
                              </h2>

                              <p className="mt-2 text-xs tracking-wide text-gray-500">
                                Upload or drag & drop your file PNG or JPG
                              </p>

                              <input
                                type="file"
                                name="ktpFile"
                                className="hidden"
                                onChange={onChange}
                              />
                            </label>
                          </div>
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Upload Image Project dengan ukuran
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image
                                ? formData.image.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            No HP/WA Pengaju
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            name="noWa"
                            value={formData.noWa}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Maximal Pencapaian Project
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="number"
                            name="target"
                            value={formData.target}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Rp.100.000.00"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 w-full">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                          Minimal Pencapaian Project
                          <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                          type="number"
                          name="minimal"
                          value={formData.minimal}
                          onChange={onChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Rp.100.000.00"
                          required
                        />
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Deskripsikan Project Anda
                          </label>
                          <textarea
                            id="desc"
                            rows="4"
                            name="desc"
                            value={formData.desc}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Deskripsikan project anda..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Profil Perusahaan
                          </label>
                          <textarea
                            id="profilPerusahaan"
                            rows="4"
                            name="profilPerusahaan"
                            value={formData.profilPerusahaan}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Profil Perusahaan..."
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Legalitas Perusahaan
                          </label>
                          <textarea
                            id="legalitasPerusahaan"
                            rows="4"
                            name="legalitasPerusahaan"
                            value={formData.legalitasPerusahaan}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Legalitas Perusahaan..."
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Anda dapat mengupload legalitas perusahaan anda
                            berupa gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_legal
                                ? formData.image_legal.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_legal"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Pemegang Saham
                          </label>
                          <textarea
                            id="pemegangSaham"
                            rows="4"
                            name="pemegangSaham"
                            value={formData.pemegangSaham}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Pemegang Saham"
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Anda dapat mengupload Pemegang Saham anda berupa
                            gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_pemegangSaham
                                ? formData.image_pemegangSaham.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_pemegangSaham"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] mb-[2rem] flex-col items-center">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Lokasi Project
                          </label>
                          <textarea
                            id="lokasiProject"
                            rows="4"
                            name="lokasiProject"
                            value={formData.lokasiProject}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Lokasi project anda..."
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-4">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            URL Lokasi Project dalam googlemaps
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            name="urlLokasi"
                            value={formData.urlLokasi}
                            onChange={onChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Rencana Anggaran Biaya
                          </label>
                          <textarea
                            id="rencanaAnggaran"
                            rows="4"
                            name="rencanaAnggaran"
                            value={formData.rencanaAnggaran}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Rencana Anggaran Biaya Anda"
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Anda dapat mengupload Rencana Anggaran anda berupa
                            gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_rencanaAnggaran
                                ? formData.image_rencanaAnggaran.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_rencanaAnggaran"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Financial Highlights
                          </label>
                          <textarea
                            id="financialHighlights"
                            rows="4"
                            name="financialHighlights"
                            value={formData.financialHighlights}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Financial Highlights"
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Anda dapat mengupload Finansial anda berupa gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_finansial
                                ? formData.image_finansial.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_finansial"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Laporan Laba Rugi
                          </label>
                          <textarea
                            id="laporanLabaRugi"
                            rows="4"
                            name="laporanLabaRugi"
                            value={formData.laporanLabaRugi}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Laporan Laba Rugi"
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Laporan Laba Rugi dalam gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_labaRugi
                                ? formData.image_labaRugi.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_labaRugi"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-center w-full mt-[1rem] flex-col items-center mb-[3rem]">
                        <div className="w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Analisa Mitigasi dan Resiko
                          </label>
                          <textarea
                            id="analisaResiko"
                            rows="4"
                            name="analisaResiko"
                            value={formData.analisaResiko}
                            onChange={onChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Analisa Mitigasi dan Resiko"
                          ></textarea>
                        </div>
                        <div className="mb-3 w-full mt-[1rem]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                            Analisa mitigasi dan resiko dalam gambar
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <label className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2  bg-white border-2 border-gray-300 border-dashed cursor-pointer rounded-xl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-8 h-8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                              />
                            </svg>

                            <h2 className="mt-1 font-medium tracking-wide text-gray-700 ">
                              {formData.image_analisaResiko
                                ? formData.image_analisaResiko.name
                                : "Upload Image"}
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or drag & drop your file PNG or JPG
                            </p>

                            <input
                              type="file"
                              name="image_analisaResiko"
                              className="hidden"
                              onChange={onChange}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-end w-full pb-[3rem] mt-[2rem]">
                        <button
                          type="submit"
                          className="px-3 py-2 bg-color-1 text-white text-md rounded-md"
                        >
                          Ajukan Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuatPendanaan;
