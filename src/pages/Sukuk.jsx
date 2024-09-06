import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import WomanImage from "../assets/images/service-1.webp";
import Galeri1 from "../assets/images/Asset2.webp";
import Galeri2 from "../assets/images/Asset4.webp";
import Galeri3 from "../assets/images/Asset5.webp";
import Galeri4 from "../assets/images/Asset6.webp";
import Galeri5 from "../assets/images/dash2.jpg";
import Galeri6 from "../assets/images/dash3.jpg";

const Sukuk = () => {

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
                                src={WomanImage}  // Use the WomanImage variable for the source
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
                            Sukuk adalah efek syariah berupa sertifikat atau bukti kepemilikan yang diterbitkan oleh perusahaan (Penerbit), yang bernilai sama dan mewakili bagian yang tidak terpisahkan atau tidak terbagi (syuyu’), atas aset yang mendasarinya.
                        </p>
                        <span className="inline-block h-1 w-10 rounded bg-green-500 mt-8 mb-6"></span>
                        <h2 className="text-gray-900 font-bold title-font tracking-wider text-md">INVSMA</h2>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                            Galeri Bisnis
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Galeri bisnis kami menampilkan berbagai proyek dan usaha yang mencerminkan komitmen kami terhadap keunggulan dan inovasi. Dari layanan keuangan mutakhir hingga solusi bisnis strategis, setiap gambar menceritakan kisah dedikasi kami dalam membantu klien mencapai pertumbuhan dan kesuksesan yang berkelanjutan. Jelajahi portofolio kami dan lihat bagaimana kami mewujudkan ide menjadi nyata.
                        </p>

                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Galeri1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Galeri2} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={Galeri3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block" src={Galeri4}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Galeri5} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block" src={Galeri6}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Sukuk;
