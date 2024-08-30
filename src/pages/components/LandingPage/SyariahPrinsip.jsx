const SyariahPrinsip = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="text-left">
        <p className="title font-bold text-2xl mt-[2rem] text-color-1 py-2">
          Penerapan Lima Prinsip Dasar Aspek Syariah
        </p>
        <p className="title font-normal text-1xl  text-color-1 py-2">
          INVSMA mewujudkan invenstasi halal dan tidak melanggar syariat islam.
        </p>
      </div>
      <div className="flex justify-around gap-4 mt-[1rem] mb-[3rem]">
        <div className=" border-r border-gray-400 pr-[2rem]">
          <div className="title">
            <p className="text-lg font-bold text-color-1">
              Kitabullah wa Sunnatu Rasulullah
            </p>
          </div>
          <div className="desc text-justify text-sm mt-[1rem]">
            Dipupuk oleh kearifan ilahi yang dikemas dalam Al-Qur`&apos`an dan tradisi
            mulia yang diturunkan oleh Nabi, pendekatan kami berkembang sebagai
            bukti tak tergoyahkan akan prinsip-prinsip Islam yang mendalam dan
            abadi.
          </div>
        </div>
        <div className=" border-r border-gray-400 pr-[2rem]">
          <div className="title">
            <p className="text-lg font-bold text-color-1">Fatawa `&apos` Ulama</p>
          </div>
          <div className="desc text-justify text-sm mt-[1rem]">
            <p className="mt-[1rem] mb-[1rem] font-bold">
              AAOIFI, OKI, Lajnah Daimah & DSN-MUI
            </p>
            <p>
              Kami mematuhi pendapat dan keputusan yang diinformasikan dari para
              ulama dan lembaga yang dihormati, seperti AAOIFI, OKI, Lajnah
              Daimah, dan DSN-MUI, untuk memastikan praktik keuangan kami
              sejalan dengan persyaratan Syariah.
            </p>
          </div>
        </div>
        <div className=" border-r border-gray-400 pr-[2rem]">
          <div className="title">
            <p className="text-lg font-bold text-color-1">
              Khuruj Min Ikhtilaf
            </p>
          </div>
          <div className="desc text-justify text-sm mt-[1rem]">
            <p className="mt-[1rem] mb-[1rem] font-bold">
              (Dialihkan dari Dispute)
            </p>
            Komitmen kami terhadap persatuan dan keharmonisan mendorong kami
            untuk menghindari perselisihan dan ketidaksepakatan, mendorong
            lingkungan keuangan yang kohesif dan kooperatif.
          </div>
        </div>{" "}
        <div className=" border-r border-gray-400 pr-[2rem]">
          <div className="title">
            <p className="text-lg font-bold text-color-1">Saddudz Dzari`&apos`ah</p>
          </div>
          <div className="desc text-justify text-sm mt-[1rem]">
            <p className="mt-[1rem] mb-[1rem] font-bold">
              (Tutup Pintu Perbuatan Jahat)
            </p>
            Kami menekankan pentingnya menutup pintu untuk tindakan yang
            bertentangan dengan prinsip-prinsip Islam, memastikan transaksi
            keuangan yang etis dan bajik.
          </div>
        </div>{" "}
        <div className="pr-[2rem]">
          <div className="title">
            <p className="text-lg font-bold text-color-1">
              Maqashid Syar`&apos`iyyah
            </p>
          </div>
          <div className="desc text-justify text-sm mt-[1rem]">
            <p className="mt-[1rem] mb-[1rem] font-bold">
              (Tujuan Utama Syariah)
            </p>
            Pendekatan keuangan kami didasarkan pada tujuan dasar hukum Syariah,
            yang berupaya menegakkan keadilan, kesetaraan, dan kesejahteraan
            masyarakat, sebagai tujuan inti dari kegiatan keuangan kami.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyariahPrinsip;
