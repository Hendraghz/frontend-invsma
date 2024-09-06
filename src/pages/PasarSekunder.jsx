import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Profit from "../assets/images/Profit.jpg";
import Galeri1 from "../assets/images/Asset2.webp";
import Galeri2 from "../assets/images/Asset4.webp";
import Galeri3 from "../assets/images/Asset5.webp";
import Galeri4 from "../assets/images/Asset6.webp";

const PasarSekunder = () => {

    return (
        <div>
            <Navbar />

            {/* Main Content Section */}
            <div className="bg-color-3 pt-[11rem] border-b-2">
                <div className="bg-white py-12 w-3/4 px-6">
                    <h1 className="text-5xl font-bold text-gray-900">Building Bridges for Sustainable and Inclusive Growth</h1>
                </div>
            </div>

            <div className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Text Section */}
                        <div className="lg:w-2/3 mb-6 lg:mb-0">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Our dedicated team collaborates closely with you to gain deep insights into your aspirations, and together, we craft a pragmatic blueprint that paves the way towards achieving your objectives.
                            </h1>
                        </div>
                        {/* Image Section */}
                        <div className="lg:w-1/3">
                            <img
                                src={Profit}
                                alt="Team member"
                                className="rounded-lg object-cover object-center w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="text-gray-600 body-font bg-color-3">
                <div className="container px-5 py-24 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg">
                            Pasar sekunder adalah pasar keuangan di mana sekuritas yang sebelumnya diterbitkan, seperti saham, obligasi, atau instrumen keuangan lainnya, diperdagangkan di antara investor. Pada pasar ini, pemilik sekuritas menjualnya kepada investor lain, bukan kepada perusahaan atau entitas yang menerbitkan sekuritas tersebut. Dengan kata lain, pasar sekunder adalah tempat terjadinya perdagangan sekuritas setelah penerbitan awalnya di pasar primer.
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        <h2 className="text-gray-900 font-bold title-font tracking-wider text-md">INVSMA</h2>
                    </div>
                </div>
            </section>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Gallery</h2>

                            <p className="hidden max-w-screen-sm text-gray-500 md:block">
                                Galeri bisnis kami menampilkan berbagai proyek dan usaha yang mencerminkan komitmen kami terhadap keunggulan dan inovasi. Dari layanan keuangan mutakhir hingga solusi bisnis strategis, setiap gambar menceritakan kisah dedikasi kami dalam membantu klien mencapai pertumbuhan dan kesuksesan yang berkelanjutan. Jelajahi portofolio kami dan lihat bagaimana kami mewujudkan ide menjadi nyata.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                        <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src={Galeri1} loading="lazy" alt="Gallery 1" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        </a>

                        <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={Galeri2} loading="lazy" alt="Gallery 2" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        </a>

                        <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={Galeri3} loading="lazy" alt="Gallery 3" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        </a>

                        <a href="#" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src={Galeri4} loading="lazy" alt="Gallery 4" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        </a>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
};

export default PasarSekunder;
