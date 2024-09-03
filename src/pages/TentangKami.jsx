import { useState } from 'react';
import Navbar from './layout/Navbar'; // Assuming you have this
import Footer from './layout/Footer'; // Assuming you have this

const TentangKami = () => {
  const [activeTab, setActiveTab] = useState('Tentang Kami');

  return (
    <div>
      <Navbar />

      <div className="bg-gray-50 min-h-screen flex flex-col items-center">
        <div className='mt-32 mb-5'>
          <h1 className='font-bold text-2xl'>Tentang Kami</h1>
        </div>
        <div className="bg-green-700 py-2 px-3 rounded-full flex justify-center max-w-max">
          {/* Tabs */}

          <div className="flex space-x-4">
            <button
              className={`py-2 px-6 rounded-full font-semibold transition ${activeTab === 'Tentang Kami' ? 'bg-white text-green-700' : 'bg-green-700 text-white'
                }`}
              onClick={() => setActiveTab('Tentang Kami')}
            >
              Tentang Kami
            </button>
            <button
              className={`py-2 px-6 rounded-full font-semibold transition ${activeTab === 'Visi Kami' ? 'bg-white text-green-700' : 'bg-green-700 text-white'
                }`}
              onClick={() => setActiveTab('Visi Kami')}
            >
              Visi Kami
            </button>
            <button
              className={`py-2 px-6 rounded-full font-semibold transition ${activeTab === 'Tim Kami' ? 'bg-white text-green-700' : 'bg-green-700 text-white'
                }`}
              onClick={() => setActiveTab('Tim Kami')}
            >
              Tim Kami
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-6 rounded-lg flex justify-center items-center mt-6 w-full">
          <div className="w-full max-w-screen-lg h-full">
            {activeTab === 'Tentang Kami' && (
              <div className="h-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Tentang INVSMA</h1>
                <p className="text-gray-700 mb-4">
                  INVSMA is a Fintech securities offering (Securities Crowdfunding) service provider that provides a platform for businesses/SMEs to sell securities directly to investors. INVSMA presents as a platform that brings together businesses and investors.
                </p>
              </div>
            )}

            {activeTab === 'Visi Kami' && (
              <div className="h-full flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Visi dan Misi INVSMA</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Visi:</h2>
                <p className="text-gray-700 mb-4">
                  Empower SMEs, support syariah compliant business ecosystems, and be a trusted partner for innovative financial solutions in Asia and beyond.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Misi:</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Deliver Sharia-compliant investment and financing solutions to investors and SME financing partners.</li>
                  <li>Our commitment to integrity, transparency, accountability, and accountability aligns Islamic law with every transaction.</li>
                  <li>We aim to provide sustainable, long-term investment growth with a positive societal impact.</li>
                </ul>
              </div>
            )}

            {activeTab === 'Tim Kami' && (
              <div className="h-full flex flex-col justify-center">
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Tim Kami</h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Assalamualaikum Growing Muslim!

                        Perkenalkan, kami adalah tim Nabitu yang berdedikasi untuk menggabungkan keahlian kami di bidang manajemen bisnis, keuangan, teknologi, hukum Islam dan dakwah agar dapat membangun platform dan komunitas dengan harapan kami dapat berkontribusi dan bermanfaat sebagai Katalis Pertumbuhan Ekonomi Islam.

                        Semoga Allah mengabulkan harapan dan cita-cita kami. Aamiin ya Rabbal Alamiin.
                      </p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/80x80"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                            <p className="text-gray-500">UI Designer</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/84x84"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                            <p className="text-gray-500">CTO</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/88x88"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                            <p className="text-gray-500">Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/88x88"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                            <p className="text-gray-500">Founder</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/88x88"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Oskar Piastri</h2>
                            <p className="text-gray-500">IT Manager</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/88x88"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Lando Norris</h2>
                            <p className="text-gray-500">HR</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/90x90"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                            <p className="text-gray-500">DevOps</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/94x94"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                            <p className="text-gray-500">Software Engineer</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/98x98"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                            <p className="text-gray-500">UX Researcher</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/100x90"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                            <p className="text-gray-500">QA Engineer</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/104x94"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                            <p className="text-gray-500">System</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/108x98"
                          />
                          <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                            <p className="text-gray-500">Product Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TentangKami;
