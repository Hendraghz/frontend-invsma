const OurBestService = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="px-4 md:px-10 border-b border-grey-500 pb-[5rem] md:w-full 2xl:w-4/5">
        <p className="title font-bold text-xl mt-[2rem] py-2">
          Our Best Service
        </p>
        <div className="flex justify-between items-start gap-5 px-[6rem] mt-[2rem]">
          <div className="wrap w-1/2">
            <p className="text-black font-extrabold text-xl">Sukuk</p>
            <p className="font-normal text-gray-400 text-lg mt-2">
              Sukuk is a sharia security in the form of a certificate or proof
              of ownership issued by the company (Issuer), which is of equal
              value and represents an inseparable or indivisible part (syuyu’),
              of the underlying asset.
            </p>
          </div>
          <div className="border-l-2 border-gray-400 px-2 w-0.5"></div>
          <div className="wrap w-1/2">
            <p className="text-black font-extrabold text-xl">Sharia Stocks</p>
            <p className="font-normal text-gray-400 text-lg mt-2">
              Sharia shares are shares issued by a company (Issuer) and in
              accordance with Islamic sharia principles. In this context, sharia
              means that investing in such stocks does not involve elements that
              are prohibited in Islam, such as riba (interest), gharar
              (uncertainty), and haram (prohibited activities or goods).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestService;
