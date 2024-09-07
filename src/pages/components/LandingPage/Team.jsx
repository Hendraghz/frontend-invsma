import asset from "../../../assets/images/dash2.jpg";

const Team = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`,
  };
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center">
        <img
          src={asset}
          alt="hijab"
          style={heroStyle}
          className="w-full scale-x-[-1] h-[30rem] object-cover object-top"
        />
        <div className="absolute -ml-[60rem] mt-[9rem]">
          <p className="text-white text-2xl font-bold">Team</p>
          <p className=" text-white text-5xl font-extrabold mt-2 w-[25rem]">
            Get to know the incredible individuals behind our company
          </p>
          <button className="px-8 py-3 bg-color-2  font-bold mt-[1rem] hover:bg-white">
            Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
