import Sidebar from "../../layout/Sidebar";

const StatusVerifikasi = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="pt-[6rem] px-10 w-full pb-[3rem] border-l">
        <div className="wrap px-3 py-3 border border-color-1">
          <div className="title text-center">
            <p className="font-bold text-[1.1rem] text-color-1">
              Verifikasi Identifikasi
            </p>
            <p className="font-light">
              Proses ini berjalan untuk memverifikasi data yang ada kirimkan
            </p>
          </div>
          <div className="flex items-start mt-[2rem] justify-center">
            <div>
              <div className="flex items-center gap-2">
                <p className="px-3 py-2 text-xs bg-color-1 rounded-full text-white">
                  1
                </p>
                <p>Informasi Personal Anda</p>
              </div>
              <div className="flex items-center gap-2 mt-[1rem]">
                <p className="px-3 py-2 text-xs bg-color-1 rounded-full text-white">
                  2
                </p>
                <p>Informasi berupa gambar yang anda Upload</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-[2rem]">
            <p className="font-light">
              Untuk menkonfirmasi jika ada kesalahan atau hal yang perlu <br />{" "}
              di perbaiki akan kami hubungi melalui kontak di bawah
            </p>
            <div className="flex items-center justify-center gap-[7rem] mt-[3rem]">
              <div>
                <p className="font-light">Mobile Number</p>
                <p>+628123123731</p>
              </div>
              <div>
                <p className="font-light">Email Address</p>
                <p>example@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusVerifikasi;
