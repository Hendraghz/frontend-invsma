import "./App.css";
import Login from "./pages/auth/Login";
import PilihRole from "./pages/auth/PilihRole";
import Registrasi from "./pages/auth/Registrasi";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import VerifikasiData from "./pages/users/verifikasi/VerifikasiData";
import StatusVerifikasi from "./pages/users/verifikasi/StatusVerifikasi";
import DetailProject from "./pages/DetailProject";
import Layanan from "./pages/Layanan";
import TentangKami from "./pages/TentangKami";
import Informasi from "./pages/Informasi";
import Dashboard from "./pages/users/Dashboard";
import NotFound from "./pages/notFound";
import { AuthProvider } from "./utils/context/AuthContext";
import PrivateRoute from "./routes/PrivateRoutes";
import AjukanPendanaan from "./pages/users/pendanaanProject/AjukanPendanaan";
import DataTransaksi from "./pages/users/DataTransaksi";
import Transaksi from "./pages/users/Transaksi";
import Bisnis from "./pages/users/Bisnis";
import BuatPendanaan from "./pages/users/pendanaanProject/BuatPendanaan";
import EditPendanaan from "./pages/users/pendanaanProject/EditPendanaan";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import VerifikasiDataAdmin from "./pages/admin/VerifikasiDataAdmin";
import CekSertifikat from "./pages/users/CekSertifikat";
import FrequentlyAsked from "./pages/users/FrequentlyAsked";
import ImbaHasil from "./pages/users/ImbaHasil";
import Dividen from "./pages/users/Dividen";
import DetailDividen from "./pages/users/DetailDividen";
import Kupon from "./pages/users/Kupon";
import DetailKupon from "./pages/users/DetailKupon";
import KodeReferal from "./pages/users/KodeReferal";
import Profile from "./pages/users/Profile";
import Portofolio from "./pages/users/Portofolio";
import PasarSekunder from "./pages/users/PasarSekunder";
import DataProject from "./pages/admin/project/DataProject";
import DetailProjectAdmin from "./pages/admin/project/DetailProjectAdmin";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/layanan" element={<Layanan />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/informasi" element={<Informasi />} />
            <Route path="/register" element={<Registrasi />} />
            <Route
              path="/ajukan-pendanaan"
              element={
                <PrivateRoute>
                  <AjukanPendanaan />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-pendanaan/:id"
              element={
                <PrivateRoute>
                  <EditPendanaan />
                </PrivateRoute>
              }
            />
            <Route
              path="/create-pendanaan"
              element={
                <PrivateRoute>
                  <BuatPendanaan />
                </PrivateRoute>
              }
            />
            <Route
              path="/pilih-role"
              element={
                <PrivateRoute>
                  <PilihRole />
                </PrivateRoute>
              }
            />
            <Route
              path="/cek-sertifikat"
              element={
                <PrivateRoute>
                  <CekSertifikat />
                </PrivateRoute>
              }
            />
            <Route
              path="/data-transaksi"
              element={
                <PrivateRoute>
                  <DataTransaksi />
                </PrivateRoute>
              }
            />
            <Route
              path="/transaksi/:id"
              element={
                <PrivateRoute>
                  <Transaksi />
                </PrivateRoute>
              }
            />
            <Route
              path="/bisnis"
              element={
                <PrivateRoute>
                  <Bisnis />
                </PrivateRoute>
              }
            />
            <Route
              path="/faq"
              element={
                <PrivateRoute>
                  <FrequentlyAsked />
                </PrivateRoute>
              }
            />
            <Route
              path="/imba-hasil"
              element={
                <PrivateRoute>
                  <ImbaHasil />
                </PrivateRoute>
              }
            />
            <Route
              path="/pasar-sekunder"
              element={
                <PrivateRoute>
                  <PasarSekunder />
                </PrivateRoute>
              }
            />
            <Route
              path="/dividen"
              element={
                <PrivateRoute>
                  <Dividen />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail-dividen"
              element={
                <PrivateRoute>
                  <DetailDividen />
                </PrivateRoute>
              }
            />
            <Route
              path="/portofolio"
              element={
                <PrivateRoute>
                  <Portofolio />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/referal-kupon"
              element={
                <PrivateRoute>
                  <Kupon />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail-kupon"
              element={
                <PrivateRoute>
                  <DetailKupon />
                </PrivateRoute>
              }
            />
            <Route
              path="/kode-referal"
              element={
                <PrivateRoute>
                  <KodeReferal />
                </PrivateRoute>
              }
            />
            <Route
              path="/verifikasi-data"
              element={
                <PrivateRoute>
                  <VerifikasiData />
                </PrivateRoute>
              }
            />
            <Route
              path="/verifikasi-project"
              element={
                <PrivateRoute>
                  <DataProject />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail-project-admin"
              element={
                <PrivateRoute>
                  <DetailProjectAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/status-verifikasi"
              element={
                <PrivateRoute>
                  <StatusVerifikasi />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard-admin"
              element={
                <PrivateRoute>
                  <DashboardAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/verifikasi-data-admin"
              element={
                <PrivateRoute>
                  <VerifikasiDataAdmin />
                </PrivateRoute>
              }
            />
            <Route
              path="/detail-project/:id"
              element={
                <PrivateRoute>
                  <DetailProject />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
