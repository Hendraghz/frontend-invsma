import { useEffect, useState } from "react";
import { article } from "../../data";

const Berita = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="px-4 md:px-10">
      <div className="text-center">
        <p className="title font-bold text-2xl mt-[4rem] text-color-1 py-2">
          Artikel & Pembelajaran
        </p>
        <p className="title font-normal text-1xl  text-color-1 py-2">
          Dapatkan Artikel Terbaru
        </p>
      </div>
      <div className="flex items-center gap-4 overflow-x-auto overflow-y-hidden mt-[2rem] h-fit">
        {loading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="w-[20rem] h-[30rem] bg-gray-100 animate-pulse rounded-md"
              >
                <div className="w-2/3 p-4 md:p-4">
                  <h1 className="w-40 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                  <p className="w-48 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>

                  <div className="flex mt-4 item-center gap-x-2">
                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                    <p className="w-5 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                  </div>

                  <div className="flex justify-between mt-6 item-center">
                    <h1 className="w-10 h-2 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>

                    <div className="h-4 bg-gray-200 rounded-lg w-28 dark:bg-gray-700"></div>
                  </div>
                </div>
              </div>
            ))
          : article.map((pro) => {
              return (
                <div key={pro.id} className="pb-[1rem]">
                  <div className="w-[20rem] h-[33rem] shadow-xl text-black rounded-md border">
                    <a href="" className="">
                      <img
                        src={pro.img}
                        alt={pro.title}
                        className="rounded-md h-[15rem] w-[20rem]"
                        loading="lazy"
                      />
                    </a>
                    <div className="tipe mt-[1rem] px-3 flex items-center justify-between">
                      <p className="text-xs">{pro.tipe}</p>
                      <p className="text-xs">{pro.tgl}</p>
                    </div>
                    <div className="body mt-[1rem] px-3">
                      <p className="text-base font-bold">{pro.title}</p>
                      <p className="text-xs mt-3 text-justify">{pro.desc}</p>
                      <div className="flex items-center justify-end pb-[1rem] mt-[1rem]">
                        <button className="text-color-1 text-sm bg-color-2 px-2 py-2 rounded-md">
                          Detail Artikel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Berita;
