import { useState } from "react";
import { layanan } from "../../data";

const Layanan = () => {
  const [openService, setOpenService] = useState(null);
  const toggleService = (id) => {
    if (openService === id) {
      setOpenService(null);
    } else {
      setOpenService(id);
    }
  };
  return (
    <div>
      {" "}
      <div>
        <p className="text-color-1 font-bold text-2xl">LAYANAN INVSMA</p>
        <p className="text-black font-normal text-lg mb-[2rem]">
          Berikut beberapa layanan unggulan INVSMA untuk memenuhi kebutuhan
          Anda.
        </p>
        {layanan.map((lay, index) => (
          <div key={lay.id}>
            <div
              className="px-2 py-4 bg-color-2 mt-[1rem] font-bold text-color-1 shadow-md rounded-sm flex items-center justify-between"
              onClick={() => toggleService(lay.id)}
            >
              <p>
                {index + 1}. {lay.title}
              </p>
              <button className="px-8">
                {openService === lay.id ? "▲" : "▼"}
              </button>
            </div>
            {openService === lay.id && (
              <div className="p-4 bg-white shadow-md rounded-sm flex  gap-4">
                <div className="">
                  <p className="font-bold mb-[1rem]">1. {lay.des1.title}</p>
                  <p>{lay.des1.desk}</p>
                </div>
                <div className="">
                  <p className="font-bold  mb-[1rem]">2. {lay.des2.title}</p>
                  <p>{lay.des2.desk}</p>
                </div>
                <div className="">
                  <p className="font-bold  mb-[1rem]">3. {lay.des3.title}</p>
                  <p>{lay.des3.desk}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layanan;
