// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Sidebar from "../../layout/Sidebar";
import html2pdf from "html2pdf.js";

const DetailImbaHasil = () => {
  const componentRef = useRef();

  const handleDownload = () => {
    const element = componentRef.current;

    const opt = {
      margin: [10, 10, 10, 10],
      filename: "DetailImbaHasil.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    };

    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex justify-center w-full border-l pt-[6rem]">
        <div className="px-12 w-full">
          <div className="titlepage">
            <h1 className="font-bold text-xl text-color-1">
              Halaman Detail Imba Hasil
            </h1>
          </div>

          <div className="wrap w-full flex justify-center mt-[4rem]">
            <div
              className="detail w-[710px] px-8 py-5 border border-gray-200 rounded-md shadow-sm"
              ref={componentRef}
            >
              <div className="header">
                <p className="font-bold text-lg">Detail Imba Hasil</p>
              </div>
              <div className="mt-[2rem] px-4 py-3 flex justify-between items-center rounded-xl border border-gray-300">
                <div className="flex items-center">
                  <div className="icon px-2 py-2 rounded-full bg-pink-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                      />
                    </svg>
                  </div>
                  <div className="ml-[1rem]">
                    <p className="text-normal">
                      Imba hasil dari project{" "}
                      <span className="font-bold">Resort Cofee</span>
                    </p>
                    <p className="font-normal text-gray-400 text-md">
                      Diterima
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-lg">Rp. 150.000</p>
                  <p className="font-normal text-md text-gray-400 text-right">
                    IDR
                  </p>
                </div>
              </div>
              <div className="tab pt-[2rem] pb-[1rem] border-b border-gray-300">
                <p className="font-bold text-sm">Details</p>
              </div>
              <div className="details pb-[2rem] border-b-2 border-gray-300">
                <div className="title mt-[1rem] mb-[1rem]">
                  <p className="font-bold">Detail Imba Hasil</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Imba Hasil Number
                  </p>
                  <p className="text-sm font-bold">9876543210</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Status Imba Hasil
                  </p>
                  <p className="text-sm font-bold px-5 py-2 bg-green-200 rounded-xl flex items-center justify-center h-full status-print">
                    Success
                  </p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Tanggal Imba Hasil
                  </p>
                  <p className="text-sm font-bold">29 Jul,2023 5:20 PM</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">Penerima</p>
                  <p className="text-sm font-bold">Jane Doe</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Jumlah Diterima
                  </p>
                  <p className="text-sm font-bold">Rp. 150.000</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Imba Hasil Selesai
                  </p>
                  <p className="text-sm font-bold">29 Jul,2023 6:00 PM</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Biaya Transaksi
                  </p>
                  <p className="text-sm font-bold">Rp. 5000</p>
                </div>
                <div className="flex justify-between mb-3">
                  <p className="text-sm font-bold text-gray-400">
                    Payment Method
                  </p>
                  <p className="text-sm font-bold">Credit Card</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-[2rem] no-print">
            <button
              className="bg-blue-400 hover:bg-blue-800 py-2.5 px-5 rounded-md font-bold text-white no-print"
              onClick={handleDownload}
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }

          .detail {
            width: 210mm !important;
            max-width: 210mm !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }

          .wrap, .detail, .px-8 {
            padding: 0 !important;
          }
      `}</style>
    </div>
  );
};

export default DetailImbaHasil;
