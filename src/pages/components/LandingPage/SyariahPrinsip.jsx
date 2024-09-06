const SyariahPrinsip = () => {
  return (
    <div className="px-4 mt-[3rem] md:px-10 flex justify-center">
      <div className="md:w-full 2xl:w-4/5">
        <div className="text-left">
          <p className="title font-bold text-md mt-[2rem] text-color-1 py-2">
            Nilai-Nilai INVSMA (INVSMA Values)
          </p>
        </div>
        <div className="flex justify-around gap-4 mt-[1rem] mb-[3rem]">
          <div className=" border-r border-gray-400 pr-[2rem] w-[26rem] px-6">
            <div className="title">
              <p className="text-xl font-bold">Integrity</p>
            </div>
            <div className="desc text-left text-sm mt-[1rem] text-gray-500">
              <p>
                the quality of being honest and having strong moral principles.
                It involves consistency in actions, values, methods, and
                principles, and is often associated with trustworthiness and
                reliability.
              </p>
            </div>
          </div>
          <div className=" border-r border-gray-400 pr-[2rem]  w-[23rem] px-6">
            <div className="title">
              <p className="text-xl font-bold  ">Niche</p>
            </div>
            <div className="desc text-left text-sm mt-[1rem] text-gray-500">
              <p>
                These are products or services designed to appeal to a specific
                segment of the market. For example, a company might produce
                organic, gluten-free snacks for health-conscious consumers.
                These products cater to a niche market rather than the mass
                market.
              </p>
            </div>
          </div>
          <div className=" border-r border-gray-400 pr-[2rem]  w-[22rem] px-6">
            <div className="title">
              <p className="text-xl font-bold">Visionary</p>
            </div>
            <div className="desc text-justify text-md mt-[1rem] text-gray-500">
              Forward-Thinking, Resilient and Persistent, Strategic Thinker
            </div>
          </div>{" "}
          <div className=" border-r border-gray-400 pr-[2rem]  w-[22rem] px-6">
            <div className="title">
              <p className="text-xl font-bold">Sustainability</p>
            </div>
            <div className="desc text-justify text-md mt-[1rem] text-gray-500">
              consider their long-term impacts on society, the economy, and the
              environment.
            </div>
          </div>{" "}
          <div className="border-r border-gray-400 pr-[2rem]  w-[22rem] px-6">
            <div className="title">
              <p className="text-xl font-bold">Muamalah</p>
            </div>
            <div className="desc text-left text-md text-gray-500 mt-[1rem]">
              Governs financial and commercial dealings, ensuring they are
              conducted in a manner that is fair, transparent, and compliant
              with Islamic law.
            </div>
          </div>
          <div className="pr-[2rem]  w-[22rem] px-6">
            <div className="title">
              <p className="text-xl font-bold">Amanah</p>
            </div>
            <div className="desc text-justify text-md text-gray-500 mt-[1rem]">
              Our key ethical concept that emphasizes integrity, honesty, and
              the importance of fulfilling obligations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyariahPrinsip;
