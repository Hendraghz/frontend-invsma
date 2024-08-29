import Logo from "../../assets/images/Logo3.png";
const Footer = () => {
  return (
    <>
      <div className="flex items-center w-screen">
        <div className="w-3/6 h-[3rem] bg-color-1 mt-10 flex items-center justify-end px-12">
          <a  href="" className="font-bold text-sm text-color-2 flex items-center gap-3 group transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#c4f363"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            0812361271
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1"></span>
          </a>
        </div>
        <div className="w-3/6 h-[3rem] mt-10 flex items-center justify-start pl-[8rem] bg-color-2">
          <a
            href=""
            className="font-extrabold text-sm text-color-1 flex items-center gap-3 group transition-colors"
          >
            Schedule a free Consultant
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-color-1 mt-1"></span>
          </a>
        </div>
      </div>
      <div
        className=" text-white py-8 w-screen"
        style={{ backgroundColor: "#1b2523" }}
      >
        <div className="mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-2/4 mb-6 md:mb-0">
              <div className="flex gap-5 items-center">
                <img src={Logo} alt="logo" width={130} />
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-color-2">
                    Building wealth, creating futures.
                  </h2>
                  <p className="text-md">
                    Trusted financial consulting firm providing expert guidance
                    and personalized solutions to help clients unlock their full
                    financial potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 text-sm">
            <p>&copy; 2024 INVSMA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
