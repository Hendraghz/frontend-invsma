const Disclaimer = () => {
  return (
    <div>
      <div className="px-4 md:px-10 border-b border-grey-500 pb-[5rem] mt-[3rem]">
        <p className="title font-bold text-2xl mt-[2rem] py-2 text-center">
          DISCLAIMER
        </p>
        <div className="flex justify-center items-start">
          <div>
            <p className="text-gray-500 font-normal text-lg">
              Sesuai Peraturan Otoritas Jasa Keuangan (POJK) No.57/POJK.04/2020
              tentang “Penawaran Efek Melalui Layanan Urun Dana Berbasis
              Teknologi Informasi” Pasal 27, kami menyatakan bahwa :
            </p>
            <ul className="mt-4 list-disc px-8 text-gray-600  text-xl">
              <li>
                <p>
                  OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI
                  ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN
                  KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA
                  INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT
                  ADALAH PERBUATAN MELANGGAR HUKUM.
                </p>
              </li>
              <li>
                <p>
                  INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU
                  MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA
                  TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN
                  PENYELENGGARA.
                </p>
              </li>
              <li>
                <p>
                  PENERBIT DAN PENYELENGGARA, BAIK SENDIRI SENDIRI MAUPUN
                  BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN
                  SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
