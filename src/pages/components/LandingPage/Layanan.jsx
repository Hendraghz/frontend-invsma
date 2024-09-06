import { layanan } from "../../data";

const Layanan = () => {
  return (
    <div className="px-4 md:px-10 flex justify-center ">
      {" "}
      <div className="md:w-full 2xl:w-4/5">
        <p className="text-color-1 font-bold text-2xl">LAYANAN INVSMA</p>
        <p className="text-black font-normal text-lg mb-[2rem]">
          Berikut beberapa layanan unggulan INVSMA untuk memenuhi kebutuhan
          Anda.
        </p>
        {layanan.map((lay, index) => (
          <div key={lay.id}>
            <div className="bg-gray-100 px-2 py-2">
              <div className="title">
                <p className="text-md font-semibold text-gray-500">
                  {index + 1}. {lay.title}
                </p>
                <p className="text-6xl font-semibold text-gray-500 mt-[1rem]">
                  {lay.subtitle}
                </p>
              </div>
              <div className="content mt-[2rem] flex items-center">
                <div className="py-20 px-4 bg-white border boder-gray-500 w-[20rem] h-[24rem]">
                  <div className="icon mb-[2rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </div>
                  <div className="sub">
                    <p className="text-lg font-semibold">{lay.des1.title}</p>
                  </div>
                  <div className="text">
                    <p className="mt-[1rem] font-light">{lay.des1.desk}</p>
                  </div>
                </div>
                <div className="py-20 px-4 bg-white border boder-gray-500 w-[20rem]  h-[24rem]">
                  <div className="icon mb-[2rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </div>
                  <div className="sub">
                    <p className="text-lg font-semibold">{lay.des2.title}</p>
                  </div>
                  <div className="text">
                    <p className="mt-[1rem] font-light">{lay.des2.desk}</p>
                  </div>
                </div>
                <div className="py-20 px-4 bg-white border boder-gray-500 w-[20rem]  h-[24rem]">
                  <div className="icon mb-[2rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-14"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                      />
                    </svg>
                  </div>
                  <div className="sub">
                    <p className="text-lg font-semibold">{lay.des3.title}</p>
                  </div>
                  <div className="text">
                    <p className="mt-[1rem] font-light">{lay.des3.desk}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
