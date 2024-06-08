import Me from "../../public/me.jpeg";

function Coach() {
  return (
    <div className="py-8 px-8 lg:px-20 md:px-0 bg-white text-black">
      <div className="md:flex md:items-center">
        <div className="md:w-5/12 md:text-center flex justify-center">
          <img
            src={Me}
            alt="Coach"
            className="w-96 h-72 rounded-lg"
            style={{ transform: "skew(-12deg)" }}
          />
        </div>
        <div className="mt-8 md:w-7/12 md:text-left text-center">
          <p className="text-lg md:text-xl text-justify md:pr-16 italic">
            I am currently in my final year at the Indian Institute of
            Technology, Kanpur, specializing in Mathematics and Scientific
            Computing with a minor in Computer Science & Engineering. Technology
            has always fascinated me, and I enjoy delving into its complexities
            to uncover how things work behind the scenes. I'm passionate about
            various tech domains like Software Development, Machine Learning,
            Artificial Intelligence, Blockchain, and more. I've built a solid
            foundation in these areas and continue to expand my knowledge.
          </p>
          <a
            href="/about"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold mt-8 rounded"
            style={{
              display: "inline-block",
              width: "8rem",
              height: "3rem",
              textAlign: "center",
              lineHeight: "3rem",
            }}
          >
            Know more...
          </a>
        </div>
      </div>
    </div>
  );
}

export default Coach;
