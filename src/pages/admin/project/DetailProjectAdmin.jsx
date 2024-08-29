import { Link } from "react-router-dom";
import { dummy } from "../../../assets/DataDummy";
import Pro1 from "../../../assets/images/Pro1.jpg";
import SidebarAdmin from "../../layout/SidebarAdmin";
import { useState } from "react";

const DetailProjectAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex w-screen">
      <SidebarAdmin />
      <div className="main border-l">
        <div className="pt-[4rem] flex justify-center w-screen">
          <div className="mt-[4rem]">
            <img src={Pro1} alt="" className="h-[20rem] rounded-md" />
          </div>
          <div className="mt-[4rem] ml-[5rem] w-4/12">
            <div className="category w-fit">
              <p className="px-2 py-1 text-white uppercase text-sm bg-color-1 rounded-md">
                Obligasi
              </p>
            </div>
            <div className="judul mt-[1rem]">
              <p className="text-color-1 font-bold text-md uppercase w-[32rem]">
                Project Test - PT INVSMA | Tahun 2024
              </p>
              <p className="text-black font-normal text-sm mb-[2rem] mt-[1rem] w-[30rem] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas libero nam totam aspernatur nihil, nesciunt quod
                incidunt ipsum rerum laudantium, tenetur repellendus quaerat
                mollitia accusamus. Iste accusantium natus pariatur repudiandae!
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Jakarta Utara</p>
              </div>
              <div className="flex items-center gap-2 ml-[3rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p>28 Hari</p>
              </div>
            </div>
          </div>
        </div>
        <div className="detailPengajuan flex justify-center w-5/6">
          <div className="pt-[5rem] w-5/6">
            <div className="informasiumum">
              <div className="title text-left">
                <p className="font-bold text-color-1 text-lg mb-[1rem]">
                  Informasi Umum Project
                </p>
              </div>
              <form>
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
                              value="Pembangunan Gedung"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
                            />
                          </div>
                          <div className="mb-3 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                              Jenis Pendanaan yang diinginkan
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <select
                              name="tipe"
                              value="Saham"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              disabled
                            >
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
                              value="PT ABC Indonesia"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              value="Jakarta"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-4 w-full mt-[1rem]">
                          <div className="mb-3 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                              Waktu Project
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <select
                              name="waktu_tersisa"
                              value="90"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              disabled
                            >
                              <option value="30">1 Bulan</option>
                              <option value="60">2 Bulan</option>
                              <option value="90">3 Bulan</option>
                            </select>
                          </div>
                          <div className="mb-3 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                              Tanggal Pengajuan{" "}
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <input
                              type="date"
                              name="tanggalPengajuan"
                              value="2024-08-01"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              value="1234567890123456"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              value="081234567890"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              <img
                                src={dummy.ktp}
                                alt=""
                                className="w-[16rem] h-[10rem]"
                                onClick={() => openModal(dummy.ktp)}
                              />
                            </div>
                          </div>
                          <div className="mb-3 w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-900">
                              Upload Image Project dengan ukuran
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <img
                              src={Pro1}
                              alt=""
                              className="w-[16rem] h-[10rem]"
                              onClick={() => openModal(Pro1)}
                            />
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
                              value="081234567890"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              value="100000000"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder="Rp.100.000.000"
                              readOnly
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
                            value="50000000"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Rp.50.000.000"
                            readOnly
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
                              value="Deskripsi lengkap tentang proyek pembangunan gedung."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Deskripsikan project anda..."
                              readOnly
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
                              value="Profil perusahaan yang akan mengelola proyek ini."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Profil Perusahaan..."
                              readOnly
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
                              value="Dokumen legalitas perusahaan yang mengelola proyek ini."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Legalitas Perusahaan..."
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Anda dapat mengupload legalitas perusahaan anda
                              berupa gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <img
                              src={dummy.legalitas}
                              alt=""
                              className="w-full"
                              onClick={() => openModal(dummy.legalitas)}
                            />
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
                              value="Nama pemegang saham utama dalam proyek ini."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Pemegang Saham"
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Anda dapat mengupload Pemegang Saham anda berupa
                              gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <img
                              src={dummy.pemeganSaham}
                              alt=""
                              className="w-full"
                              onClick={() => openModal(dummy.pemeganSaham)}
                            />
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
                              value="Jl. Raya No.1, Jakarta"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Lokasi project anda..."
                              readOnly
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
                              value="https://goo.gl/maps/abcde12345"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                              placeholder=""
                              readOnly
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
                              value="Rencana anggaran lengkap untuk proyek pembangunan gedung."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Rencana Anggaran Biaya Anda"
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Anda dapat mengupload Rencana Anggaran anda berupa
                              gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <div className="flex w-full justify-center mt-3">
                              <img
                                src={dummy.rencana}
                                alt=""
                                className="w-[28rem]"
                                onClick={() => openModal(dummy.rencana)}
                              />
                            </div>
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
                              value="Ringkasan finansial proyek ini."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Financial Highlights"
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Anda dapat mengupload Finansial anda berupa gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <div className="flex w-full justify-center mt-3">
                              <img
                                src={dummy.finasial}
                                alt=""
                                className="w-[28rem]"
                                onClick={() => openModal(dummy.finasial)}
                              />
                            </div>
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
                              value="Ringkasan laporan laba rugi proyek ini."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Laporan Laba Rugi"
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Laporan Laba Rugi dalam gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <div className="flex w-full justify-center mt-3">
                              <img
                                src={dummy.laporanlaba}
                                alt=""
                                className="w-[28rem]"
                                onClick={() => openModal(dummy.laporanlaba)}
                              />
                            </div>
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
                              value="Analisa mitigasi dan resiko yang mungkin terjadi."
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                              placeholder="Analisa Mitigasi dan Resiko"
                              readOnly
                            ></textarea>
                          </div>
                          <div className="mb-3 w-full mt-[1rem]">
                            <label className="block mb-2 text-sm font-medium text-gray-900 text-center">
                              Analisa mitigasi dan resiko dalam gambar
                              <span className="text-red-500 text-lg">*</span>
                            </label>
                            <div className="flex w-full justify-center mt-3">
                              <img
                                src={dummy.analisa_mitigasi}
                                alt=""
                                className="w-[28rem]"
                                onClick={() =>
                                  openModal(dummy.analisa_mitigasi)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end w-full pb-[3rem] mt-[2rem]">
                          <Link to={"/verifikasi-project"}>
                            <button
                              type="submit"
                              className="px-3 py-2 bg-color-1 text-white text-md rounded-md"
                            >
                              Verifikasi Project
                            </button>
                          </Link>
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
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg p-4 py-5">
            <button
              className="absolute top-0 right-0 p-2 cursor-pointer"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={modalImage}
              alt="Modal Image"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProjectAdmin;
