import { useEffect, useState } from "react";
import {
  getProjectAdmin,
  VerifPendanaan,
} from "../../../api/project/apiproject";
import SidebarAdmin from "../../layout/SidebarAdmin";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DataProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectAdmin();
        setProjects(data || []);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  const handleVerifikasi = async (idProject) => {
    try {
      const formData = {
        id: idProject,
        status: "verified",
      };
      const response = await VerifPendanaan(formData);
      if (response.status === "verified") {
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success",
        });
        setProjects((prevProjects) =>
          prevProjects.map((project) =>
            project.id === idProject
              ? { ...project, status: "verified" }
              : project
          )
        );
      } else {
        throw new Error(response.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  const numberFormat = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  return (
    <div className="flex w-screen">
      <SidebarAdmin />
      <div className="flex-1 overflow-y-auto pt-[6rem]">
        <div className="px-12">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Verifikasi Data Project Admin
            </h1>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nama PT
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Lokasi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tercapai
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Target
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Waktu Tersisa
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tipe
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Dibuat Tanggal
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr className="bg-white border-b" key={project.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {index + 1}
                      </th>
                      <td className="px-6 py-4">{project.nama}</td>
                      <td className="px-6 py-4">{project.oleh}</td>
                      <td className="px-6 py-4">{project.lokasi}</td>
                      <td className="px-6 py-4">
                        {numberFormat(project.tercapai)}
                      </td>
                      <td className="px-6 py-4">
                        {numberFormat(project.target)}
                      </td>
                      <td className="px-6 py-4">{project.sisaWaktu} hari</td>
                      <td className="px-6 py-4">{project.tipe}</td>
                      <td className="px-6 py-4">
                        {new Date(project.createdAt).toLocaleDateString(
                          "id-ID"
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p
                          className={`px-3 py-2 rounded-md text-white ${
                            project.status === "verified"
                              ? "bg-green-500"
                              : project.status === "pending"
                              ? "bg-yellow-300 text-color-1"
                              : ""
                          }`}
                        >
                          {project.status}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          className="font-medium text-white hover:underline px-3 py-1 bg-blue-600 rounded-md hover:bg-blue-100 "
                          onClick={() => handleVerifikasi(project.id)}
                        >
                          Verifikasi
                        </button>
                        <Link to={"/detail-project-admin"}>
                          <button className="font-medium text-white hover:underline px-3 py-1 bg-green-600 rounded-md hover:bg-green-100 ml-2 mt-2">
                            Detail
                          </button>
                        </Link>
                        <button className="font-medium text-white hover:underline px-3 py-1 bg-red-600 rounded-md hover:bg-red-100 ml-2 mt-2">
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex mt-[2rem] pb-[4rem] justify-center items-center">
            <div className="flex mt-[2rem] pb-[4rem] justify-center items-center">
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                <svg
                  className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Previous
              </button>
              <p className="mx-8">2 of 2</p>
              <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                Next
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProject;
