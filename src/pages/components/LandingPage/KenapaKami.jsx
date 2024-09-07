import image from "../../../assets/images/Whyus.svg";
import image from "../../../assets/images/Whyus.svg";
const KenapaKami = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="px-4 md:px-10 border-b border-grey-500 pb-3 md:w-full 2xl:w-4/5">
        <p className="title font-bold text-2xl mt-[2rem] py-2">Why us</p>
        <p className="font-extrabold text-6xl w-[52rem] leading">
          Trusted experts with years of experience and industry accreditations
        </p>
        <div className="mt-[1rem] flex justify-between">
          <div className="desc w-[28rem] text-left font-semibold text-gray-500 text-lg mt-[2rem]">
            <p>
              At Invsma, we are committed to guiding you on your
              Sharia-compliant financial path with expertise, honesty, and a
              personalized touch. Our experienced team of Sharia financial
              consultants is dedicated to helping you reach your financial goals
              step by step.
            </p>
            <p className="mt-5">
              Our mission is to give you the knowledge and tools to make
              informed decisions while staying true to Sharia principles,
              ensuring your financial stability and long-term success.
            </p>
          </div>
          <img src={image} alt="" className="w-[34rem]" />
          <div className="flex flex-col w-[22rem]">
            <div className="TAM border-b border-gray-400 pb-[2rem] mx-16 w-[16rem]">
              <p className="title font-extrabold text-4xl">64 Million</p>
              <p className="font-normal textleft">(TAM)</p>
              <p className="font-light textleft">Total Available Market</p>
            </div>
            <div className="TAM border-b border-gray-400 pb-[2rem] mt-[2rem] mr-[8rem] w-[15rem]">
              <p className="title font-extrabold text-4xl">6.4 Million</p>
              <p className="font-normal textleft">(SAM)</p>
              <p className="font-light textleft">
                Serviceable Available Market
              </p>
            </div>
            <div className="TAM border-b border-gray-400 pb-[2rem] mt-[2rem] mr-[14rem] w-[18rem]">
              <p className="title font-extrabold text-4xl">Less Then 0.1%</p>
              <p className="font-normal textleft">(SOM)</p>
              <p className="font-light textleft">
                Serviceable Obtainable Market
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KenapaKami;
