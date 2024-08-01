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
import AjukanPendanaan from "./pages/users/AjukanPendanaan";

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
              path="/pilih-role"
              element={
                <PrivateRoute>
                  <PilihRole />
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
