import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarUser from "../layout/NavbarUser";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { getProjectById } from "../../api/project/apiproject";
import { ApiUrl } from "../../api/baseUrl";
import Swal from "sweetalert2";

const Transaksi = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState(0);
  const investmentPrice = 100000;
  const [totalInvest, setTotalInvest] = useState(0);
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 30));

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

  useEffect(() => {
    setTotalInvest(stock * investmentPrice);
  }, [stock]);

  const handleIncrease = () => {
    setStock(stock + 1);
  };

  const handleDecrease = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("authTokens");
      const decoded = jwtDecode(token);
      const userId = decoded.userId;
      const response = await axios.post(`${ApiUrl}/trans`, {
        id_project: projectData.id,
        id_user: userId,
        nominal: totalInvest,
        name: decoded.name,
        email: decoded.email,
      });

      const { snap_token } = response.data;

      window.snap.pay(snap_token, {
        onSuccess: (result) => {
          Swal.fire({
            title: "Payment Success!",
            text: "Your payment was successful.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            history("/data-transaksi");
          });
        },
        onPending: (result) => {
          Swal.fire({
            title: "Waiting for Payment",
            text: "Your payment is pending.",
            icon: "info",
            confirmButtonText: "OK",
          });
        },
        onError: (result) => {
          Swal.fire({
            title: "Payment Failed",
            text: "There was an error with your payment.",
            icon: "error",
            confirmButtonText: "OK",
          });
        },
        onClose: () => {
          Swal.fire({
            title: "Payment Incomplete",
            text: "You closed the payment window before completing the transaction.",
            icon: "warning",
            confirmButtonText: "OK",
          });
        },
      });
    } catch (error) {
      console.error("Error creating transaction:", error);
      Swal.fire({
        title: "Transaction Error",
        text: "There was an error creating the transaction.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <NavbarUser />
      <div className="pt-[6rem] flex justify-center">
        <div className="transaction px-3 py-3 w-[30rem] shadow-xl mt-[2rem] rounded-xl">
          <div className="namatipe pt-[1rem]">
            <p className="text-xs font-bold text-gray-500">Detail Pembelian</p>
            <div className="flex justify-between">
              <p className="text-sm font-normal">Nama Bisnis</p>
              <p className="text-sm font-bold">{projectData.nama}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-normal">Tipe Investasi</p>
              <p className="text-sm font-bold">{projectData.tipe}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-normal">Minimal Investasi</p>
              <p className="text-sm font-normal">Rp. 100.000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-normal">Awal Penawaran</p>
              <p className="text-sm font-normal">
                {startDate.toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-normal">Akhir Penawaran</p>
              <p className="text-sm font-normal">
                {endDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="harga mt-[1rem] border border-gray-400 rounded-md">
            <div className="flex justify-between px-2 py-2 border-b border-gray-400 bg-color-1 text-white">
              <p className="text-sm font-normal">
                {" "}
                Harga Investasi{" "}
                {projectData.tipe === "Saham"
                  ? "per lembar"
                  : projectData.tipe === "Obligasi"
                  ? "per kupon"
                  : "per unit"}
              </p>
              <p className="text-sm font-bold">
                Rp. {investmentPrice.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-center items-center mt-2 mb-[1rem]">
              <div className="text-center">
                <p className="text-sm font-bold">Jumlah unit</p>
                <div className="flex items-center mt-1">
                  <button
                    onClick={handleDecrease}
                    className="px-2 py-0.5 border border-gray-300 rounded-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <p className="text-md font-normal mx-1 rounded-md border border-gray-400 w-[4rem] px-2 py-0.5">
                    {stock}
                  </p>
                  <button
                    onClick={handleIncrease}
                    className="px-2 py-0.5 border border-gray-300 rounded-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="detail border border-gray-400 rounded-md mt-4">
            <div className="flex justify-between px-2 py-2 border-b border-gray-400">
              <p className="text-sm font-normal">Pemesanan</p>
              <p className="text-sm font-bold">Total Harga Investasi</p>
            </div>
            <p className="text-sm font-bold px-2">
              {projectData.nama} - {projectData.tipe}
            </p>
            <div className="flex justify-between mt-2 px-2">
              <p className="text-sm font-normal">Stok: {stock}</p>
              <p className="text-sm font-normal">
                Rp. {totalInvest.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between mt-2 px-2">
              <p className="text-sm font-normal">Biaya Layanan</p>
              <p className="text-sm font-normal">Rp. 25000</p>
            </div>
            <div className="flex justify-between mt-2 px-2 mb-2">
              <p className="text-sm font-normal">Biaya Transaksi</p>
              <p className="text-sm font-normal">Rp. 5000</p>
            </div>
          </div>
          <div className="total flex justify-between items-center px-2 mt-5 border border-gray-400 rounded-md py-1">
            <p className="font-bold text-md">Total</p>
            <p className="font-bold">Rp. {totalInvest.toLocaleString()}</p>
          </div>
          <div className="w-full flex justify-between items-center mt-[2rem] gap-2">
            <button className="px-3 py-2 bg-yellow-400 rounded-md text-black hover:bg-yellow-200">
              Kembali
            </button>
            <button
              onClick={handlePayment}
              className="px-3 py-2 bg-color-1 rounded-md text-white hover:bg-green-700"
            >
              Lanjutkan Pembayaran
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaksi;
