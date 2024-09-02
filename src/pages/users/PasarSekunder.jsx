import Sidebar from "../layout/Sidebar";
import { useEffect, useState } from "react";
import { getProject } from "../../api/project/apiproject.jsx";
import { ApiUrl } from "../../api/baseUrl.jsx";

const PasarSekunder = () => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProject();
        setProject(data || []);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setProject([]);
      }
    };
    fetchData();
  }, []);
  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex justify-center w-5/6 border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Pasar Sekunder
            </h1>
          </div>
          <div className="filter mt-[1rem]">
            <div className="title">
              <h1 className="font-bold text-sm text-color-1">Pasar Sekunder</h1>
              <p className="font-normal text-xs ">
                Penjelasan mengenai pasar sekunder
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 overflow-auto mt-[2rem]">
            {loading ? (
              Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="w-[20rem] h-[30rem] bg-gray-100 animate-pulse rounded-md"
                >
                  <div className="w-2/3 p-4 md:m-4">
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
            ) : project.length === 0 ? (
              <div className="w-full text-center mt-[2rem]">
                <p className="text-gray-500 text-xl">
                  Tidak ada project tersedia.
                </p>
              </div>
            ) : (
              project.map((pro) => {
                const tercapaiNum = pro.tercapai;
                const targetNum = pro.target;
                const percentage = (tercapaiNum / targetNum) * 100;

                return (
                  <div key={pro.id} className="pb-[1rem]">
                    <div>
                      <div className="w-[20rem] h-[36rem] shadow-xl text-black rounded-md border bg-white">
                        <div>
                          <img
                            src={`${ApiUrl}${pro.image}`}
                            alt={pro.nama}
                            className="rounded-md h-[15rem]"
                            loading="lazy"
                          />
                        </div>
                        <div className="tipe mt-[1rem] px-3">
                          <p className="px-2 py-1 bg-color-1 text-white w-fit rounded-md uppercase text-xs">
                            {pro.tipe}
                          </p>
                        </div>
                        <div className="mt-[1rem] px-3 flex flex-col justify-between h-[16rem]">
                          <div>
                            <p className="text-base font-bold">
                              {pro.nama} - {pro.oleh} | Tahun 2024
                            </p>
                            <p className="text-xs mt-1">{pro.desc}</p>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mt-[1rem]">
                              <div className="tercapai text-left">
                                <p className="text-xs mb-2">Tercapai</p>
                                <p className="text-sm text-color-1 font-bold">
                                  {numberFormat(pro.tercapai)}
                                </p>
                              </div>
                              <div className="tercapai text-right ">
                                <p className="text-xs mb-2">Target</p>
                                <p className="text-sm text-color-1">
                                  {numberFormat(pro.target)}
                                </p>
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
                                <p className="font-normal text-xs">
                                  Waktu Tersisa
                                </p>
                                <p className="text-base font-medium">
                                  {pro.waktu_tersisa}
                                </p>
                              </div>
                              <button className="text-color-1 text-sm bg-color-2 px-2 py-2 rounded-md">
                                Detail Project
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasarSekunder;
