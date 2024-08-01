import { images } from "../assets/images/sidebaricons";

export const navigation = [
  {
    id: "0",
    title: "Beranda",
    url: "/",
  },
  {
    id: "1",
    title: "Layanan Kami",
    url: "/layanan",
  },
  {
    id: "2",
    title: "Tentang Kami",
    url: "/tentang-kami",
  },
  {
    id: "3",
    title: "Informasi",
    url: "/informasi",
  },
  {
    id: "4",
    title: "New account",
    url: "/register",
    onlyMobile: true,
  },
];

export const navigationUser = [
  {
    id: "0",
    title: "Bisnis",
    url: "#features",
  },
  {
    id: "1",
    title: "Tentang Kami",
    url: "#pricing",
  },
  {
    id: "2",
    title: "FAQ",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Ajukan Pendanaan",
    url: "/ajukan-pendanaan",
  },
  {
    id: "4",
    title: "Cek Sertifikat",
    url: "#signup",
    onlyMobile: true,
  },
];

export const sidebar = [
  {
    id: 0,
    title: "Dashboard",
    path: "/dashboard",
    icon: images.dashboard,
  },
  {
    id: 1,
    title: "Bisnis",
    path: "/bisnis",
    icon: images.bisnis,
  },
  {
    id: 2,
    title: "Transaksi",
    path: "/transaksi",
    icon: images.shopping,
  },
  {
    id: 3,
    title: "Portofolio",
    path: "/portofolio",
    icon: images.line,
  },
  {
    id: 4,
    title: "Imba Hasil",
    path: "/imba-hasil",
    icon: images.message,
  },
  {
    id: 5,
    title: "Dividen",
    path: "/dividen",
    icon: images.line,
  },
  {
    id: 6,
    title: "Kupon",
    path: "/referal-kupon",
    icon: images.kupon,
  },
];
