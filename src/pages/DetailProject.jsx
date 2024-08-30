import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sidebar from "./layout/NavbarUser";
import Footer from "./layout/Footer";
import MenuProject from "./components/ProjectSection/MenuProject";
import { getProjectById } from "../api/project/apiproject";
import { ApiUrl } from "../api/baseUrl";

const DetailProject = () => {
  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectById(id);
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }
  const tercapaiNum = projectData.tercapai;
  const targetNum = projectData.target;
  const percentage = (tercapaiNum / targetNum) * 100;

  return (
    <div>
      <Sidebar />
      <div className="pt-[4rem] flex justify-center">
        <div className="mt-[4rem]">
          <img
            src={`${ApiUrl}${projectData.image}`}
            alt=""
            className="h-[20rem] rounded-md"
          />
        </div>
        <div className="mt-[4rem] ml-[5rem] w-4/12">
          <div className="category w-fit">
            <p className="px-2 py-1 text-white uppercase text-sm bg-color-1 rounded-md">
              {projectData.tipe}
            </p>
          </div>
          <div className="judul mt-[1rem]">
            <p className="text-color-1 font-bold text-2xl uppercase w-[32rem]">
              {projectData.nama} - {projectData.oleh} | Tahun 2024
            </p>
            <p className="text-black font-normal text-lg mb-[2rem] mt-[1rem] w-[30rem] text-justify">
              {projectData.desc}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>{projectData.lokasi}</p>
            </div>
            <div className="flex items-center gap-2 ml-[3rem]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <p>{projectData.waktu_tersisa} Hari</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full max-full mt-[1rem]">
            <div className="w-full">
              <p className="text-left font-bold text-[1.3rem]">
                Pencapaian Pengajuan Ini
              </p>
              <div className="flex justify-between items-center mt-[1rem]">
                <div className="tercapai text-left">
                  <p className="text-xs mb-2">Tercapai</p>
                  <p className="text-sm text-color-1 font-bold">
                    {numberFormat(projectData.tercapai)}
                  </p>
                </div>
                <div className="tercapai text-right ">
                  <p className="text-xs mb-2">Target</p>
                  <p className="text-sm text-color-1">
                    {numberFormat(projectData.target)}
                  </p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-full h-2.5 mt-3">
                <div
                  className="bg-color-1 h-2.5 rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-[2rem]">
            <div className="flex items-center gap-3">
              <Link to={`/transaksi/${projectData.id}`}>
                <button className="px-5 py-2 bg-color-1 text-white text-sm uppercase  rounded-md hover:bg-green-700">
                  Investasi
                </button>
              </Link>
              <button className="px-5 py-2 bg-white text-color-1 text-sm uppercase  rounded-md flex items-center gap-4 border border-color-gray-300 shadow-md hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 28 28"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                  />
                </svg>
                Unduh Proposal
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-2 py-2 bg-red-100 rounded-md hover:bg-red-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </button>
              <button className="px-2 py-2 bg-green-400 rounded-md hover:bg-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <MenuProject projectData={projectData} />
      <Footer />
    </div>
  );
};

export default DetailProject;
