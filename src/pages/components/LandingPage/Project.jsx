import { useEffect, useState } from "react";
import { project } from "../../data";
import { Link } from "react-router-dom";

const Project = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="border-b border-color-1">
        <p className="title font-bold text-2xl mt-[4rem] text-color-1 py-2">
          PROJECT TERBARU
        </p>
      </div>
      <div className="flex items-center gap-4 overflow-auto mt-[2rem]">
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
          : project.map((pro) => {
              const tercapaiNum = parseInt(
                pro.tercapai.replace(/[^\d]/g, ""),
                10
              );
              const targetNum = parseInt(pro.Target.replace(/[^\d]/g, ""), 10);
              const percentage = (tercapaiNum / targetNum) * 100;

              return (
                <div key={pro.id} className="pb-[1rem]">
                  <Link to={`/detail-project/${pro.id}`}>
                    <div className="w-[20rem] shadow-xl text-black rounded-md border">
                      <div>
                        <img
                          src={pro.image}
                          alt={pro.nama}
                          className="rounded-md h-[15rem]"
                        />
                      </div>
                      <div className="tipe mt-[1rem] px-3">
                        <p className="px-2 py-1 bg-color-1 text-white w-fit rounded-md uppercase text-xs">
                          {pro.tipe}
                        </p>
                      </div>
                      <div className="mt-[1rem] px-3">
                        <p className="text-base font-bold">
                          {pro.nama} - {pro.oleh} | Tahun 2024
                        </p>
                        <p className="text-xs mt-1">{pro.desc}</p>
                        <div className="flex justify-between items-center mt-[1rem]">
                          <div className="tercapai text-left">
                            <p className="text-xs mb-2">Tercapai</p>
                            <p className="text-sm text-color-1 font-bold">
                              {pro.tercapai}
                            </p>
                          </div>
                          <div className="tercapai text-right ">
                            <p className="text-xs mb-2">Target</p>
                            <p className="text-sm text-color-1">{pro.Target}</p>
                          </div>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2.5 mt-3">
                          <div
                            className="bg-color-1 h-2.5 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <div className="mt-3 flex items-center justify-between pb-[1rem]">
                          <div className="sisawaktu">
                            <p className="font-normal text-xs">Waktu Tersisa</p>
                            <p className="text-base font-medium">27 Hari</p>
                          </div>
                          <button className="text-color-1 text-sm bg-color-2 px-2 py-2 rounded-md">
                            Detail Project
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
      <div className="flex items-center justify-center mt-[2rem]">
        <button className="text-color-1 rounded-md border border-color-1 hover:bg-color-1 hover:text-white px-2 py-2">
          Lihat Semua Bisnis
        </button>
      </div>
    </div>
  );
};

export default Project;
