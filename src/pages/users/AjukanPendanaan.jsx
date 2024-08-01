import NavbarUser from "../layout/NavbarUser";

const AjukanPendanaan = () => {
  return (
    <div>
      <NavbarUser />
      <div className="pt-[5rem] flex justify-center">
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
            <form>
              <div className="form mt-[1rem]">
                <div className="mt-[2rem]">
                  <div className="mt-[3rem]">
                    <div className="datajabatan">
                      <p className="text-[1.1rem] font-bold">Data Jabatan</p>
                      <div className="flex items-center gap-4 w-full mt-[1rem]">
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Nama Project
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
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
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          >
                            <option selected>Pilih Pendanaan</option>
                            <option value="Obligasi">Obligasi</option>
                            <option value="Saham">Saham</option>
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
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
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          >
                            <option selected>Pilih Waktu</option>
                            <option value="1">1 Bulan</option>
                            <option value="2">2 Bulan</option>
                            <option value="3">3 Bulan</option>
                          </select>
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Tanggal Pengajuan{" "}
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="date"
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
                                Upload File
                              </h2>

                              <p className="mt-2 text-xs tracking-wide text-gray-500">
                                Upload or darg & drop your file PNG or JPG
                              </p>

                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
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
                              Upload File
                            </h2>

                            <p className="mt-2 text-xs tracking-wide text-gray-500">
                              Upload or darg & drop your file PNG or JPG
                            </p>

                            <input
                              id="dropzone-file"
                              type="file"
                              className="hidden"
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder=""
                            required
                          />
                        </div>
                        <div className="mb-3 w-full">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Target Pencapaian Project
                            <span className="text-red-500 text-lg">*</span>
                          </label>
                          <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Rp.100.000.00"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-end w-full pb-[3rem] mt-[2rem]">
                        <button className="px-3 py-2 bg-color-1 text-white text-md rounded-md">
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

export default AjukanPendanaan;
