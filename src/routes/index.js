import { images } from "../assets/images/sidebaricons";

export const navigation = [
  {
    id: "0",
    title: "Beranda",
    url: "/",
  },
  {
    id: "1",
    title: "Layanan",
    url: "#",
    submenu: [
      {
        id: "1-1",
        title: "Sukuk",
        url: "/sukuk",
      },
      {
        id: "1-2",
        title: "Saham Syariah",
        url: "/saham-syariah",
      },
      {
        id: "1-3",
        title: "Pasar Sekunder",
        url: "/pasar-sekunder",
      },
    ],
  },
  {
    id: "2",
    title: "Tentang Kami",
    url: "/tentang-kami",
  },
  {
    id: "3",
    title: "Informasi",
    url: "#",
    submenu: [
      {
        id: "3-1",
        title: "Panduan Pengguna",
        url: "/user-guide",
      },
      {
        id: "3-2",
        title: "Kontak",
        url: "/contact",
      },
    ],
  },
];

export const navigationUser = [
  {
    id: "0",
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: "1",
    title: "Bisnis",
    url: "/bisnis",
  },
  {
    id: "2",
    title: "Cek Sertifikat",
    url: "/cek-sertifikat",
  },
  {
    id: "3",
    title: "FAQ",
    url: "/faq",
  },
  {
    id: "4",
    title: "Ajukan Pendanaan",
    url: "/ajukan-pendanaan",
  },
  // {
  //   id: "5",
  //   title: "Home",
  //   url: "/",
  // },
];

export const sidebar = [
  {
    id: 0,
    title: "Dashboard",
    path: "/dashboard",
    icon: images.dashboard,
  },
  {
    id: 2,
    title: "Transaksi",
    path: "/data-transaksi",
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
    title: "Pasar Sekunder",
    path: "/pasar-sekunder",
    icon: images.line,
  },
  {
    id: 5,
    title: "Imba Hasil",
    path: "/imba-hasil",
    icon: images.message,
  },
  {
    id: 6,
    title: "Dividen",
    path: "/dividen",
    icon: images.line,
  },
  {
    id: 7,
    title: "Kupon",
    path: "/referal-kupon",
    icon: images.kupon,
  },
];

export const sidebarAdmin = [
  {
    id: 0,
    title: "Dashboard",
    path: "/dashboard",
    icon: images.dashboard,
  },
  {
    id: 2,
    title: "Verifikasi Data",
    path: "/verifikasi-data-admin",
    icon: images.bisnis,
  },
  {
    id: 2,
    title: "Verifikasi Project",
    path: "/verifikasi-project",
    icon: images.bisnis,
  },
];
