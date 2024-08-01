import { Link } from "react-router-dom";
import { project } from "../data";
import Sidebar from "../layout/Sidebar";
import ChartComponent from "../components/Chart";
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main border-l">
        <div className="pt-[6rem] px-10  pb-[3rem] flex items-center justify-center w-full">
          <div className="wrap">
            <div className="title gap-4 py-3">
              <p className="font-bold">Halaman Dashboard</p>
            </div>
            {/* Rangkuman */}
            <div className="flex justify-between">
              <div className="px-3 py-3 rounded-md shadow-xl w-[38rem]">
                <div className="flex justify-between">
                  <div className="text">
                    <p className="font-bold text-xl text-color-1">Rangkuman</p>
                    <p className="font-light">
                      Selamat datang di dashboard INVSMA
                    </p>
                  </div>
                  <div>
                    <button className="px-3 py-1 border border-gray-400 rounded-md flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      Export
                    </button>
                  </div>
                </div>
                <div className="card flex items-center gap-2 mt-[4rem]">
                  <div className="bg-red-200 w-[12rem] rounded-xl px-3 py-3">
                    <div>
                      <div className="px-3 py-3 rounded-full bg-red-400 w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="red"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="size-4 bg-white px-1 py-1 rounded-md"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                          />
                        </svg>
                      </div>
                      <p className="mt-[1rem] font-bold text-sm">
                        Rp. 138.000.000
                      </p>
                    </div>
                    <div className="mt-[1rem]">
                      <p className="font-normal text-sm">Total Investasi</p>
                      <p className="font-normal text-xs text-blue-500 mt-2">
                        +8% dari bulan lalu
                      </p>
                    </div>
                  </div>
                  <div className="bg-orange-200  w-[12rem] rounded-xl px-3 py-3">
                    <div>
                      <div className="px-3 py-3 rounded-full bg-orange-400 w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="orange"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>
                      </div>
                      <p className="mt-[1rem] font-bold text-sm">4 Investasi</p>
                    </div>
                    <div className="mt-[1rem]">
                      <p className="font-normal text-sm">Banyak Investasi</p>
                      <p className="font-normal text-xs text-blue-500 mt-2">
                        +50% dari bulan lalu
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-300  w-[12rem] rounded-xl px-3 py-3">
                    <div>
                      <div className="px-3 py-3 rounded-full bg-green-400 w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="green"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 6h.008v.008H6V6Z"
                          />
                        </svg>
                      </div>
                      <p className="mt-[1rem] font-bold text-sm">
                        Rp. 200.000.000
                      </p>
                    </div>
                    <div className="mt-[1rem]">
                      <p className="font-normal text-sm">Total Limit</p>
                      <p className="font-normal text-xs text-blue-500 mt-2">
                        +1.2% bulan lalu
                      </p>
                    </div>
                  </div>
                  <div className="bg-purple-300  w-[12rem] rounded-xl px-3 py-3">
                    <div>
                      <div className="px-3 py-3 rounded-full bg-purple-400 w-fit">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="white"
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                          />
                        </svg>
                      </div>
                      <p className="mt-[1rem] font-bold text-sm">3 Limit</p>
                    </div>
                    <div className="mt-[1rem]">
                      <p className="font-normal text-sm">Sisa Limit</p>
                      <p className="font-normal text-xs text-blue-500 mt-2">
                        100% dari bulan lalu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-xl px-3 py-3 w-[25rem] h-fit">
                <ChartComponent />
              </div>
            </div>
            {/* Rekomendasi */}
            <div className="px-3 py-2 shadow-xl">
              <div className="title mt-[2rem]">
                <p className="font-bold text-xl">Rekomendasi Project</p>
              </div>
              <div>
                <div className="flex items-center gap-4 overflow-auto mt-[2rem]">
                  {project.slice(0, 3).map((pro) => {
                    const tercapaiNum = parseInt(
                      pro.tercapai.replace(/[^\d]/g, ""),
                      10
                    );
                    const targetNum = parseInt(
                      pro.Target.replace(/[^\d]/g, ""),
                      10
                    );
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
                                  <p className="text-sm text-color-1">
                                    {pro.Target}
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
                                    27 Hari
                                  </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
