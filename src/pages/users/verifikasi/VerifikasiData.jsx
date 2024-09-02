import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Verifikasi } from "../../../api/user/apiuser";
import Swal from "sweetalert2";
const VerifikasiData = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const token = localStorage.getItem("authTokens");
  const decoded = jwtDecode(token);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id_user: decoded.userId || "",
    nama_lengkap_pengurus: "",
    jabatan: "",
    email_pengurus: "",
    no_hp_wa_pengurus: "",
    jenis_kelamin: "",
    tanggal_lahir: "",
    nomor_ktp_pengurus: "",
    nomor_npwp_pengurus: "",
    upload_ktp_pengurus: null,
    upload_foto_npwp_pengurus: null,
    kepemilikan_saham: "",
    nama_perusahaan: "",
    tpajak: "",
    npwp_perusahaan: "",
    tipe_bisnis: "",
    tgl_pendirian: "",
    alamat_perusahaan: "",
    legal: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kode_pos: "",
    phone_perusahaan: "",
    tempat_pendirian: "",
    karakteristik_perusahaan: "",
    sumber: "",
    nib: "",
    anggaran_dasar: "",
    tujuan: "",
    jml_asset_t1: "",
    jml_asset_t2: "",
    jml_profit_t1: "",
    jml_profit_t2: "",
    cek_syarat: false,
    cek_kebijakan: false,
    cek_info: false,
  });

  const onChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = [
      "id_user",
      "nama_lengkap_pengurus",
      "jabatan",
      "email_pengurus",
      "no_hp_wa_pengurus",
      "jenis_kelamin",
      "tanggal_lahir",
      "nomor_ktp_pengurus",
      "nomor_npwp_pengurus",
      "upload_ktp_pengurus",
      "upload_foto_npwp_pengurus",
      "kepemilikan_saham",
      "nama_perusahaan",
      "tpajak",
      "npwp_perusahaan",
      "tipe_bisnis",
      "tgl_pendirian",
      "alamat_perusahaan",
      "legal",
      "provinsi",
      "kota",
      "kecamatan",
      "kode_pos",
      "phone_perusahaan",
      "tempat_pendirian",
      "karakteristik_perusahaan",
      "sumber",
      "nib",
      "anggaran_dasar",
      "tujuan",
      "jml_asset_t1",
      "jml_asset_t2",
      "jml_profit_t1",
      "jml_profit_t2",
      "cek_syarat",
      "cek_kebijakan",
      "cek_info",
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        Swal.fire({
          title: "Error",
          text: `Field ${field.replace("_", " ")} is required`,
          icon: "error",
        });
        return;
      }
    }
    const data = new FormData();

    // Loop melalui formData dan tambahkan ke FormData
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        data.append(key, formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    });
    for (let [key, value] of data.entries()) {
      console.log(`${key}: ${value}`);
    }
    try {
      await Verifikasi(data);
      navigate("/status-verifikasi");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response?.data?.msg || "Something went wrong",
        icon: "error",
      });
    }
  };
  const nextStep = () => {
    if (currentStep == 2) {
      setIsModalOpen(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1 && currentStep < 3) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentStep(2);
  };

  const handleLinkClick = (role) => {
    console.log(`Role selected: ${role}`);
    setIsModalOpen(false);
    setCurrentStep(3);
  };
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="pt-[6rem] px-10  pb-[3rem] border-l flex items-center justify-center w-full">
        <div className="wrap w-2/3">
          <div className="title flex items-center justify-center gap-4 px-2 py-3 border-b border-color-1 border-1">
            <div className="step1 flex items-center">
              <p className="px-2 py-1 bg-color-1 rounded-full text-white text-xs">
                1
              </p>
              <p className="ml-4 font-bold text-base">Verifikasi Data Diri</p>
              <span className="bg-gray-200 h-1 w-[5rem] ml-3"></span>
            </div>
            <div className="step1 flex items-center">
              <p className="px-2 py-1 bg-color-1 rounded-full text-white text-xs">
                2
              </p>
              <p className="ml-4 font-bold text-base">Identitas Perusahaan</p>
              <span className="bg-gray-200 h-1 w-[5rem] ml-3"></span>
            </div>
            <div className="step1 flex items-center">
              <p className="px-2 py-1 bg-color-1 rounded-full text-white text-xs">
                3
              </p>
              <p className="ml-4 font-bold text-base">Status</p>
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              {currentStep === 1 && (
                <div>
                  <div className="form mt-[1rem]">
                    <div className="text text-center">
                      <p className="text-[1.1rem] font-bold text-color-1">
                        Verifikasi Data Diri Anda
                      </p>
                      <p className="text-base font-light">
                        Silahkan isi formulir dibawah dengan benar dan tepat
                        serta untuk yang memuat <br /> gambar diharapkan tidak
                        buram agar proses verifikasi tidak terhambat.
                      </p>
                    </div>
                    <div className="mt-[2rem]">
                      <div className="mt-[3rem]">
                        <div className="datajabatan">
                          <p className="text-[1.1rem] font-bold">
                            Data Pribadi
                          </p>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Nama Lengkap Pengurus
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                                name="nama_lengkap_pengurus"
                                value={formData.nama_lengkap_pengurus}
                                onChange={onChange}
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jabatan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jabatan"
                                value={formData.jabatan}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih Jabatan</option>
                                <option value="Direktur">Direktur</option>
                                <option value="Komisaris">Komisaris</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Email Pengurus
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                                name="email_pengurus"
                                value={formData.email_pengurus}
                                onChange={onChange}
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                No HP/WA Pengurus{" "}
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                                maxLength={12}
                                minLength={11}
                                name="no_hp_wa_pengurus"
                                value={formData.no_hp_wa_pengurus}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jenis Kelamin
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jenis_kelamin"
                                value={formData.jenis_kelamin}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih Jabatan</option>
                                <option value="Laki - Laki">Laki - Laki</option>
                                <option value="Perempuan">Perempuan</option>
                              </select>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Tanggal Lahir{" "}
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="date"
                                name="tanggal_lahir"
                                value={formData.tanggal_lahir}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="informasi mt-[1rem]">
                          <p className="text-[1.1rem] font-bold">
                            Informasi Warga Pengurus
                          </p>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Nomor KTP Pengurus
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                name="nomor_ktp_pengurus"
                                value={formData.nomor_ktp_pengurus}
                                onChange={onChange}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Nomor NPWP Pengurus{" "}
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                name="nomor_npwp_pengurus"
                                value={formData.nomor_npwp_pengurus}
                                onChange={onChange}
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Upload KTP pengurus
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
                                    Upload File
                                  </h2>

                                  <p className="mt-2 text-xs tracking-wide text-gray-500">
                                    Upload or darg & drop your file PNG or JPG
                                  </p>

                                  <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                    name="upload_ktp_pengurus"
                                    onChange={onChange}
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Upload Foto NPWP Pengurus
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
                                  Upload File
                                </h2>

                                <p className="mt-2 text-xs tracking-wide text-gray-500">
                                  Upload or darg & drop your file PNG or JPG
                                </p>

                                <input
                                  id="dropzone-file"
                                  type="file"
                                  className="hidden"
                                  name="upload_foto_npwp_pengurus"
                                  onChange={onChange}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-[20rem] mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Kepemilikan Saham (%)
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="20"
                                required
                                name="kepemilikan_saham"
                                value={formData.kepemilikan_saham}
                                onChange={onChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div>
                  <div className="form mt-[1rem]">
                    <div className="text text-center">
                      <p className="text-[1.1rem] font-bold text-color-1">
                        Identitas Perusahaan
                      </p>
                      <p className="text-base font-light">
                        Silahkan isi formulir dibawah dengan benar dan tepat
                        serta untuk yang memuat <br /> gambar diharapkan tidak
                        buram agar proses verifikasi tidak terhambat.
                      </p>
                    </div>
                    <div className="mt-[2rem]">
                      <div className="mt-[3rem]">
                        <div className="datajabatan">
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Nama Perusahaan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                                name="nama_perusahaan"
                                value={formData.nama_perusahaan}
                                onChange={onChange}
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Tingkat Pajak{" "}
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="tpajak"
                                value={formData.tpajak}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="PPh Badan">
                                  Pph Badan (Pajak Penghasilan Badan)
                                </option>
                                <option value="PPh Final">
                                  PPh Final untuk Usaha Mikro, Kecil, dan
                                  Menengah (UMKM){" "}
                                </option>
                                <option value="PPN">
                                  PPN (Pajak Pertambahan Nilai)
                                </option>
                                <option value="PD">Pajak Daerah</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Nomor NPWP Perusahaan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                                name="npwp_perusahaan"
                                value={formData.npwp_perusahaan}
                                onChange={onChange}
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Tipe Bisnis
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="tipe_bisnis"
                                value={formData.tipe_bisnis}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="Infrastruktur">
                                  Infrastruktur
                                </option>
                                <option value="Food And Beverage">
                                  Food And Beverage
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Tanggal Pendirian
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="date"
                                name="tgl_pendirian"
                                value={formData.tgl_pendirian}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Alamat Perusahaan sesuai NPWP
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="alamat_perusahaan"
                                value={formData.alamat_perusahaan}
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
                                Legal Domisili
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="legal"
                                value={formData.legal}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="Kab Bandung">Kab Bandung</option>
                                <option value="Kota Bandung">
                                  Kota Bandung
                                </option>
                              </select>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Provinsi
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="provinsi"
                                value={formData.provinsi}
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
                                Kota
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="kota"
                                value={formData.kota}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Kecamatan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="kecamatan"
                                value={formData.kecamatan}
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
                                Kode POS
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="kode_pos"
                                value={formData.kode_pos}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                No Telp Perusahaan (Contoh : +62 8**-****-**)
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="number"
                                name="phone_perusahaan"
                                value={formData.phone_perusahaan}
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
                                Tempat Pendirian Perusahaan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="tempat_pendirian"
                                value={formData.tempat_pendirian}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Karakteristik Perusahaan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="karakteristik_perusahaan"
                                value={formData.karakteristik_perusahaan}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="PT">PT</option>
                                <option value="CV">CV</option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Sumber Pendanaan
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="sumber"
                                value={formData.sumber}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="Mandiri">Mandiri</option>
                                <option value="Investor">Investor</option>
                              </select>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                NIB
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="nib"
                                value={formData.nib}
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
                                Anggaran Dasar
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="anggaran_dasar"
                                value={formData.anggaran_dasar}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Rp.0"
                                required
                              />
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Tujuan Investasi
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <input
                                type="text"
                                name="tujuan"
                                value={formData.tujuan}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder=""
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="mt-[1rem]">
                          <p className="font-bold text-[1.1rem]">
                            Kepemilikan Asset
                          </p>
                          <p className="font-light">
                            Pastikan data yang anda kirim sudah valid dan benar.
                          </p>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jumlah Asset Tahun ke-1
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jml_asset_t1"
                                value={formData.jml_asset_t1}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="Kurang dari Rp. 10 Milyar">
                                  Kurang dari Rp. 10 Milyar
                                </option>
                                <option value="Rp. 10 Milyar - Rp. 20 Milyar">
                                  Rp. 10 Milyar - Rp. 20 Milyar
                                </option>
                                <option value="Rp. 20 Milyar - Rp. 30 Milyar">
                                  Rp. 20 Milyar - Rp. 30 Milyar
                                </option>
                                <option value="Rp. 40 Milyar - Rp. 50 Milyar">
                                  Rp. 40 Milyar - Rp. 50 Milyar
                                </option>
                                <option value="Lebih dari Rp. 50 Milyar">
                                  Lebih dari Rp. 50 Milyar
                                </option>
                              </select>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jumlah Profit Tahun ke-1
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jml_profit_t1"
                                value={formData.jml_profit_t1}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Pilih</option>
                                <option value="Kurang dari Rp. 10 Milyar">
                                  Kurang dari Rp. 10 Milyar
                                </option>
                                <option value="Rp. 10 Milyar - Rp. 20 Milyar">
                                  Rp. 10 Milyar - Rp. 20 Milyar
                                </option>
                                <option value="Rp. 20 Milyar - Rp. 30 Milyar">
                                  Rp. 20 Milyar - Rp. 30 Milyar
                                </option>
                                <option value="Rp. 40 Milyar - Rp. 50 Milyar">
                                  Rp. 40 Milyar - Rp. 50 Milyar
                                </option>
                                <option value="Lebih dari Rp. 50 Milyar">
                                  Lebih dari Rp. 50 Milyar
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 w-full mt-[1rem]">
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jumlah Asset Tahun ke-2
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jml_asset_t2"
                                value={formData.jml_asset_t2}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Wajib Pilih Jika Ada</option>
                                <option value="Kurang dari Rp. 10 Milyar">
                                  Kurang dari Rp. 10 Milyar
                                </option>
                                <option value="Rp. 10 Milyar - Rp. 20 Milyar">
                                  Rp. 10 Milyar - Rp. 20 Milyar
                                </option>
                                <option value="Rp. 20 Milyar - Rp. 30 Milyar">
                                  Rp. 20 Milyar - Rp. 30 Milyar
                                </option>
                                <option value="Rp. 40 Milyar - Rp. 50 Milyar">
                                  Rp. 40 Milyar - Rp. 50 Milyar
                                </option>
                                <option value="Lebih dari Rp. 50 Milyar">
                                  Lebih dari Rp. 50 Milyar
                                </option>
                              </select>
                            </div>
                            <div className="mb-3 w-full">
                              <label className="block mb-2 text-sm font-medium text-gray-900">
                                Jumlah Profit Tahun ke-2
                                <span className="text-red-500 text-lg">*</span>
                              </label>
                              <select
                                id="countries"
                                name="jml_profit_t2"
                                value={formData.jml_profit_t2}
                                onChange={onChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              >
                                <option value="">Wajib Pilih Jika Ada</option>
                                <option value="Kurang dari Rp. 10 Milyar">
                                  Kurang dari Rp. 10 Milyar
                                </option>
                                <option value="Rp. 10 Milyar - Rp. 20 Milyar">
                                  Rp. 10 Milyar - Rp. 20 Milyar
                                </option>
                                <option value="Rp. 20 Milyar - Rp. 30 Milyar">
                                  Rp. 20 Milyar - Rp. 30 Milyar
                                </option>
                                <option value="Rp. 40 Milyar - Rp. 50 Milyar">
                                  Rp. 40 Milyar - Rp. 50 Milyar
                                </option>
                                <option value="Lebih dari Rp. 50 Milyar">
                                  Lebih dari Rp. 50 Milyar
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              required
                              name="cek_syarat"
                              value={formData.cek_syarat}
                              onChange={onChange}
                            />
                            <p>
                              Saya setuju dengan{" "}
                              <span className="font-bold">
                                syarat dan ketentuan
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              required
                              name="cek_kebijakan"
                              value={formData.cek_kebijakan}
                              onChange={onChange}
                            />
                            <p>
                              Saya telah menyetujui{" "}
                              <span className="font-bold">
                                Kebijakan Privasi
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <input
                              type="checkbox"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                              required
                              name="cek_info"
                              value={formData.cek_info}
                              onChange={onChange}
                            />
                            <p>
                              Semua Informasi Pribai yang saya Masukkan Sudah
                              Benar
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="form-section mt-[1rem]">
                  <div className="text text-center border border-color-1 px-2 py-2">
                    <p className="text-[1.1rem] font-bold text-color-1">
                      Selesaikan Verifikasi Anda
                    </p>
                    <div className="mt-[2rem] flex justify-center">
                      <div className="px-4 py-4 rounded-full border border-color-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="black"
                          className="size-12 px-3 py-3 bg-color-2 rounded-full"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-[3rem] flex flex-col gap-3 items-center">
                      <Link to={"/dashboard"}>
                        <button className="bg-color-1 text-white w-[18rem] rounded-md text-base px-2 py-1">
                          Verifikasi
                        </button>
                      </Link>
                      <button
                        type="submit"
                        className="bg-yellow-700 text-white w-[18rem] rounded-md text-base px-2 py-1"
                      >
                        Cek Status Verifikasi
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {currentStep !== 3 && (
                <div className="buttons mt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="mr-2 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    {currentStep === 2
                      ? "Simpan Data & Pilih User eKYC"
                      : "Next"}
                  </button>
                </div>
              )}
              {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                  <div className="modal-content bg-white p-6 rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Pilih User e-KYC</h2>
                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        onClick={() => handleLinkClick("Role1")}
                        className="text-blue-500 underline w-[10rem] h-[10rem] bg-color-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100"
                      >
                        <div className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="black"
                            className="size-10 bg-white px-2 py-2 rounded-full mt-[3rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </div>
                        <p className="font-bold text-white text-1xl text-center mt-[1rem]">
                          Direktur
                        </p>
                      </a>
                      <a
                        href="#"
                        onClick={() => handleLinkClick("Role2")}
                        className="text-blue-500 underline w-[10rem] h-[10rem] bg-color-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-100"
                      >
                        <div className="flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="black"
                            className="size-10 bg-white px-2 py-2 rounded-full mt-[3rem]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </div>
                        <p className="font-bold text-white text-1xl text-center mt-[1rem]">
                          Komisaris
                        </p>
                      </a>
                    </div>
                    <button
                      onClick={closeModal}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifikasiData;
