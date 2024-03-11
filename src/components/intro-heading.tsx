import { useEffect, useState } from "react";

function Heading({
  name,
  description,
}: {
  name: string;
  description: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === description.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [description.length]);

  return (
    <div
      className="bg-black text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-12"
      style={{ paddingLeft: "16%", paddingRight: "16%" }}
    >
      <pre style={{ whiteSpace: "pre-wrap", overflow: "hidden" }}>
        &lt;Hello&gt;
        <div className="text-right">
          <p className="pt-4 text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
            {name}
          </p>
          <p className="pt-2 pb-4 text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl text-slate-300">
            {description[currentIndex]}
          </p>
        </div>
        &lt;/Hello&gt;
      </pre>
    </div>
  );
}

export default Heading;
