import { useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import TableImage from "../assets/images/assets-table.webp";
import { team } from "../assets/Team";

const TentangKami = () => {
  const [activeTab, setActiveTab] = useState("Tentang Kami");

  return (
    <div className="w-screen">
      <Navbar />

      <div className="bg-white min-h-screen flex flex-col items-center">
        <div className="mt-20 mb-5">
          <h1 className="font-bold text-2xl">Tentang Kami</h1>
        </div>
        <div className="bg-green-800 py-2 px-3 rounded-full flex justify-center max-w-max">
          {/* Tabs */}

          <div className="flex space-x-4">
            <button
              className={`py-2 px-3 rounded-full font-semibold sm:text-sm md:text-md  md:px-6 transition ${
                activeTab === "Tentang Kami"
                  ? "bg-white text-green-800"
                  : "bg-green-800 text-white"
              }`}
              onClick={() => setActiveTab("Tentang Kami")}
            >
              Tentang Kami
            </button>
            <button
              className={`py-2 px-3 rounded-full font-semibold sm:text-sm md:text-md  md:px-6 transition ${
                activeTab === "Visi Kami"
                  ? "bg-white text-green-800"
                  : "bg-green-800 text-white"
              }`}
              onClick={() => setActiveTab("Visi Kami")}
            >
              Visi Kami
            </button>
            <button
              className={`py-2 px-3 rounded-full font-semibold sm:text-sm md:text-md  md:px-6 transition ${
                activeTab === "Tim Kami"
                  ? "bg-white text-green-800"
                  : "bg-green-800 text-white"
              }`}
              onClick={() => setActiveTab("Tim Kami")}
            >
              Tim Kami
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white p-6 rounded-lg flex justify-center items-center mt-6 w-full">
          <div className="w-full max-w-screen-lg h-full">
            {activeTab === "Tentang Kami" && (
              <div className="h-full flex flex-col justify-center">
                <div className="bg-white py-6 sm:py-8 lg:py-12">
                  <div className="px-4 sm:px-8 md:px-16 lg:px-32 border-b-2 pb-5">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                      INVSMA Fintech stands as a pioneer of innovation, leading
                      the way in the global development and delivery of
                      cutting-edge, Sharia-compliant financial solutions. We are
                      dedicated to addressing the diverse financial needs of all
                      communities, extending our unwavering commitment to
                      financial inclusivity to a wider audience in accordance
                      with Sharia principles.
                      <br />
                      <br />
                      As a renowned global consulting firm, our mission aligns
                      with collaborating with business and societal leaders in
                      surmounting their most critical challenges and seizing
                      their greatest opportunities, all while upholding Islamic
                      values. Our achievements are deeply rooted in nurturing
                      profound collaboration and fostering a global community of
                      diverse individuals who are passionately committed to
                      making positive contributions to both the world and each
                      other on a daily basis, all within the framework of Sharia
                      compliance.
                    </h1>
                  </div>

                  {/* Img with text */}
                  <div className="mx-auto max-w-screen-xl px-4 md:px-8 mt-20 border-b-2 pb-5">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                      <div>
                        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                          <img
                            src="https://images.unsplash.com/photo-1546979859-b7d45d499dd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fG1hbiUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
                            loading="lazy"
                            alt="Photo by Martin Sanchez"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      <div className="md:pt-8">
                        <p className="text-center font-bold text-green-700 md:text-left">
                          Who we are
                        </p>

                        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                          TENTANG INVSMA
                        </h1>

                        <p className="mb-6 text-gray-700 sm:text-md md:mb-8">
                          INVSMA is a Fintech securities offering (Securities
                          Crowdfunding) service provider that provides a
                          platform for businesses/SMEs to sell securities
                          directly to investors. INVSMA presents as a platform
                          that brings together businesses and investors.
                          <br />
                          <br />
                          At Invsma, our journey began with a unique approach,
                          reflecting our commitment to both innovation and
                          Sharia compliance. Instead of adhering to a demanding,
                          all-or-nothing career path, we prioritized balance and
                          well-being. Invsma provides an opportunity to find
                          fulfillment in both your professional and personal
                          life, while valuing family and engaging in impactful
                          projects alongside companies within your community.
                        </p>

                        <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                          Core Principle
                        </h2>

                        <p className="mb-6 text-gray-700 sm:text-md md:mb-8">
                          Our core principle, at Invsma, is to invest in people,
                          communities, and the success of our clients, all while
                          adhering to Sharia principles. We’ve consistently been
                          recognized as a top workplace, celebrated for our
                          commitment to creating an environment where
                          individuals not only excel but also thrive, all in
                          alignment with our core values.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Purpose */}
                  <section className="text-gray-600 body-font pb-10">
                    <div className="container px-5 py-10 mx-auto">
                      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                        Our Purpose
                      </h1>
                      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="p-4 md:w-1/3 flex">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                              Insight to light
                            </h2>
                            <p className="leading-relaxed text-base">
                              We challenge traditional thinking and ways of
                              operating, bringing new perspectives to solve the
                              toughest problems.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="6" cy="6" r="3"></circle>
                              <circle cx="6" cy="18" r="3"></circle>
                              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                              Drive inspired impact
                            </h2>
                            <p className="leading-relaxed text-base">
                              We look beyond the next deadline to the next
                              decade, collaborating closely with our clients to
                              enable and energize their organizations.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                              Conquer complexity
                            </h2>
                            <p className="leading-relaxed text-base">
                              We uncover unique sources of competitive advantage
                              and hidden truths in dynamic, complex systems.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 12H4"></path>
                              <path d="M12 20V4M20 12l-8-8M4 12l8 8"></path>
                            </svg>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                              Lead with integrity
                            </h2>
                            <p className="leading-relaxed text-base">
                              We confront the hard issues, stay true to our
                              values, and communicate our views candidly and
                              directly.
                            </p>
                          </div>
                        </div>
                        <div className="p-4 md:w-1/3 flex">
                          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-4 flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 4v16M4 12h16"></path>
                              <path d="M6 6l12 12M18 6l-12 12"></path>
                            </svg>
                          </div>
                          <div className="flex-grow pl-6">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                              Grow by growing others
                            </h2>
                            <p className="leading-relaxed text-base">
                              We empower our clients, colleagues, and the
                              broader community to build success and reach their
                              full potential.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Image table */}
                  <div className="w-full h-auto flex justify-center">
                    <img
                      src={TableImage}
                      alt="Table"
                      className="w-full max-w-screen-lg h-auto rounded-lg object-contain"
                    />
                  </div>

                  <div className="flex flex-col py-12 items-center text-center px-4 md:px-8 lg:px-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                      How we work
                    </h1>
                    <h2 className="text-md md:text-lg lg:text-xl font-light">
                      Transforming organizations sustainably. Unlocking
                      performance excellence. <br />
                      Nurturing thriving workforces for generations. Partner
                      with us for success.
                    </h2>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Visi Kami" && (
              <div className="h-full flex flex-col justify-center">
                <div className="bg-white py-2 sm:py-4 lg:py-6">
                  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                      <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-4xl">
                        Nilai Kami
                      </h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">I</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Integrity
                          </h3>
                          <p className="mb-2 text-gray-500">
                            The quality of being honest and having strong moral
                            principles. It involves consistency in actions,
                            values, methods, and principles, and is often
                            associated with trustworthiness and reliability.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">N</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Niche
                          </h3>
                          <p className="mb-2 text-gray-500">
                            These are products or services designed to appeal to
                            a specific segment of the market. For example, a
                            company might produce organic, gluten-free snacks
                            for health-conscious consumers. These products cater
                            to a niche market rather than the mass market.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">V</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Visionary
                          </h3>
                          <p className="mb-2 text-gray-500">
                            Forward-Thinking, Resilient and Persistent,
                            Strategic Thinker.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">S</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Sustainability
                          </h3>
                          <p className="mb-2 text-gray-500">
                            Consider their long-term impacts on society, the
                            economy, and the environment.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">M</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Muamalah
                          </h3>
                          <p className="mb-2 text-gray-500">
                            Governs financial and commercial dealings, ensuring
                            they are conducted in a manner that is fair,
                            transparent, and compliant with Islamic law.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 md:gap-6">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-900 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                          <span className="text-xl font-bold">A</span>
                        </div>
                        <div>
                          <h3 className="mb-2 text-lg font-semibold md:text-xl">
                            Amanah
                          </h3>
                          <p className="mb-2 text-gray-500">
                            Our key ethical concept that emphasizes integrity,
                            honesty, and the importance of fulfilling
                            obligations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                      <div className="mx-auto max-w-screen-lg">
                        <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-gray-800 mb-4 sm:text-4xl">
                            Visi
                          </h2>
                          <p className="text-lg text-gray-600 sm:text-xl">
                            Empower SMEs, support syariah compliant business
                            ecosystems, and be a trusted partner for innovative
                            financial solutions in Asia and beyond.
                          </p>
                        </div>

                        <div className="text-center">
                          <h2 className="text-3xl font-bold text-gray-800 mb-8 sm:text-4xl">
                            Misi
                          </h2>
                          <ul className="text-left text-lg text-gray-600 space-y-4 sm:text-xl md:max-w-2xl md:mx-auto">
                            <li>
                              ● Deliver Sharia-compliant investment and
                              financing solutions to investors and SME financing
                              partners.
                            </li>
                            <li>
                              ● Our commitment to integrity, transparency, and
                              accountability aligns Islamic law with every
                              transaction.
                            </li>
                            <li>
                              ● We aim to provide sustainable, long-term
                              investment growth with a positive societal impact.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Tim Kami" && (
              <div className="h-full flex flex-col justify-center">
                <section className="text-gray-600 body-font">
                  <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                      <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">
                        Tim Kami
                      </h1>
                      <div className="flex justify-center mb-8">
                        <img
                          src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                          alt="Placeholder"
                          className="w-full md:w-3/4 lg:w-3/4 object-cover object-center rounded-lg"
                        />
                      </div>

                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Assalamualaikum Growing Muslim!
                        <br />
                        <br />
                        Perkenalkan, kami adalah tim Invsma yang berdedikasi
                        untuk menggabungkan keahlian kami di bidang manajemen
                        bisnis, keuangan, teknologi, hukum Islam dan dakwah agar
                        dapat membangun platform dan komunitas dengan harapan
                        kami dapat berkontribusi dan bermanfaat sebagai Katalis
                        Pertumbuhan Ekonomi Islam.
                        <br />
                        <br />
                        Semoga Allah mengabulkan harapan dan cita-cita kami.
                        Aamiin ya Rabbal Alamiin.
                      </p>
                    </div>
                    {/* SO */}
                    <div className="h-full flex flex-col justify-center">
                      <section className="text-gray-600 body-font">
                        <div className="container px-5 py-10 mx-auto">
                          <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-5 text-gray-900">
                              Board of Directors
                            </h1>
                          </div>
                          {/* Presiden */}
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_taleb}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Taleb Abdul Karem Bin Taleb
                                  </h2>
                                  <p className="text-gray-500">
                                    President Commissioner & Founder
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Komisioner */}
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_erly}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Erly Witoyo
                                  </h2>
                                  <p className="text-gray-500">Commissioner</p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CEO */}
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_husni}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Husni Muhammad Bajamal
                                  </h2>
                                  <p className="text-gray-500">
                                    Chief Executive Officer (CEO) & Founder
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Direktur */}
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_sam}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Hashemi Rafsanjani
                                  </h2>
                                  <p className="text-gray-500">
                                    Chief Technology Officer (CTO)
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_anung}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Anung Anindita
                                  </h2>
                                  <p className="text-gray-500">
                                    Chief Operating Officer (COO)
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sharia Team */}
                          <div className="flex flex-col text-center w-full mb-5 mt-16">
                            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">
                              Board of Sharia Supervisory Candidates
                            </h1>
                          </div>
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_abdullah}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Abdullah Alhamady
                                  </h2>
                                  <p className="text-gray-500">
                                    Senior Sharia Advisor{" "}
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_ahmad}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Ahmad Sabree
                                  </h2>
                                  <p className="text-gray-500">
                                    Sharia Compliance
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Sharia Team */}
                          <div className="flex flex-col text-center w-full mb-5 mt-16">
                            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-4 text-gray-900">
                              Board of Sharia Supervisory Candidates
                            </h1>
                          </div>
                          <div className="flex flex-wrap justify-center -m-4">
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src="https://via.placeholder.com/150"
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Mansoor Al Wajih
                                  </h2>
                                  <p className="text-gray-500">
                                    Investor Relation
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_riko}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Riko Permana
                                  </h2>
                                  <p className="text-gray-500">
                                    Financial Analyst
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_siddiq}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Muhammad Sidiq Abdul Aziz
                                  </h2>
                                  <p className="text-gray-500">
                                    Business Development
                                  </p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="p-4 md:w-1/2 lg:w-1/3">
                              <div className="h-full flex flex-col items-center text-center">
                                <div className="w-48 h-48 mb-4 inline-flex items-center justify-center rounded-full border-4 border-green-900 overflow-hidden">
                                  <img
                                    src={team.p_sabar}
                                    alt="team"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
                                  />
                                </div>
                                <div className="flex-grow">
                                  <h2 className="text-gray-900 title-font font-bold text-lg">
                                    Muhammad Sabar
                                  </h2>
                                  <p className="text-gray-500">IT Manager</p>
                                  <div className="mt-3 flex justify-center">
                                    <a
                                      href="#"
                                      className="text-white mx-2 flex items-center justify-center w-8 h-6 bg-green-900 rounded-full"
                                    >
                                      <span className="text-xs font-bold">
                                        JKT
                                      </span>
                                    </a>
                                    <a href="#" className="text-blue-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M22.23 0H1.77C.792 0 0 .77 0 1.72v20.56C0 23.23.792 24 1.77 24h20.46c.978 0 1.77-.77 1.77-1.72V1.72C24 .77 23.208 0 22.23 0zM7.12 20.47H3.56V9h3.56v11.47zM5.34 7.55c-1.14 0-2.06-.92-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.14-.92 2.06-2.06 2.06zM20.47 20.47h-3.56v-5.75c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.2 1.5-2.2 3.04v5.85h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.88 3.39-1.88 3.62 0 4.29 2.38 4.29 5.47v6.32z" />
                                      </svg>
                                    </a>
                                    <a href="#" className="text-pink-500 mx-2">
                                      <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.056 1.96.24 2.42.41.54.21.93.47 1.35.88.42.42.67.81.88 1.35.17.46.36 1.24.41 2.41.058 1.26.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.96-.41 2.42a3.48 3.48 0 0 1-.88 1.35 3.48 3.48 0 0 1-1.35.88c-.46.17-1.24.36-2.41.41-1.26.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.96-.24-2.42-.41a3.48 3.48 0 0 1-1.35-.88 3.48 3.48 0 0 1-.88-1.35c-.17-.46-.36-1.24-.41-2.41C2.172 15.583 2.16 15.2 2.16 12c0-3.2.012-3.584.07-4.85.056-1.17.24-1.96.41-2.42a3.48 3.48 0 0 1 .88-1.35 3.48 3.48 0 0 1 1.35-.88c.46-.17 1.24-.36 2.41-.41C8.416 2.172 8.8 2.16 12 2.16M12 0C8.74 0 8.332.012 7.052.07c-1.287.06-2.173.27-2.93.57a5.887 5.887 0 0 0-2.13 1.38 5.887 5.887 0 0 0-1.38 2.13c-.3.76-.51 1.64-.57 2.93C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.06 1.287.27 2.173.57 2.93a5.887 5.887 0 0 0 1.38 2.13 5.887 5.887 0 0 0 2.13 1.38c.76.3 1.64.51 2.93.57 1.28.058 1.69.07 4.95.07s3.668-.012 4.948-.07c1.287-.06 2.173-.27 2.93-.57a5.887 5.887 0 0 0 2.13-1.38 5.887 5.887 0 0 0 1.38-2.13c.3-.76.51-1.64.57-2.93.058-1.28.07-1.69.07-4.95s-.012-3.668-.07-4.948c-.06-1.287-.27-2.173-.57-2.93a5.887 5.887 0 0 0-1.38-2.13 5.887 5.887 0 0 0-2.13-1.38c-.76-.3-1.64-.51-2.93-.57C15.668.012 15.26 0 12 0zm0 5.838a6.16 6.16 0 1 0 6.16 6.16A6.16 6.16 0 0 0 12 5.838zm0 10.24a4.08 4.08 0 1 1 4.08-4.08 4.08 4.08 0 0 1-4.08 4.08zm6.406-11.792a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
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
