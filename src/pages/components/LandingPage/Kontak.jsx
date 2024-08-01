const Kontak = () => {
  return (
    <div>
      <div className="text-left">
        <p className="title font-bold text-2xl mt-[2rem] text-color-1 py-2">
          Kontak Kami
        </p>
        <p className="title font-normal text-1xl  text-color-1 py-2">
          Mari Jadwalkan Konsultasi bersama INVSMA
        </p>
      </div>
      <div className="flex justify-between mt-[2rem]">
        <div className="text-left w-[30rem]">
          <p className="mb-5">Atau Hubungi Kami dengan</p>
          <ul>
            <li className="mb-2">
              <a href="">
                Telephone :{" "}
                <span className="text-blue-500">0812-9230-0803</span>{" "}
              </a>
            </li>
            <li className="mb-2">
              <a href="">Email : admin@invsma.com</a>
            </li>
            <li className="mb-2">
              <a href="">
                Alamat : Jl. Cipinang Besar No.3A, RT.4/RW.6, Cipinang Besar
                Sel., Kecamatan Jatinegara, Daerah Khusus Ibukota Jakarta 13410
              </a>
            </li>
          </ul>
        </div>
        <div className="form w-[40rem]">
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nama
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="mb-3 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="example@flowbite.com"
                required
              />
            </div>
            <div className="mb-3 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                No Telp/WA
              </label>
              <input
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="mb-3 w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nama Perusahaan
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
                Situs Web
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="example.com"
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Tertarik dengan
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Manajemen Asset, Perencanaan Investasi"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Pesan
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="px-3 py-2 bg-color-1 text-white">Kirim Pesan</button>
      </div>
    </div>
  );
};

export default Kontak;
