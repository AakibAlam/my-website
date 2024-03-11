import { useState, useEffect } from "react";

function CourseCard({ text }: { text: string }) {
  const [fontSize, setFontSize] = useState<number>(24);

  useEffect(() => {
    const containerWidth = 500;
    const containerHeight = 200;
    const textLength = text.length;
    const maxWidth = containerWidth * 0.95;

    const newFontSize = Math.min(maxWidth / textLength, containerHeight * 0.8);

    setFontSize(newFontSize);
  }, [text]);

  return (
    <div className="flex justify-center items-center w-80 h-20 m-2 rounded-lg bg-lime-200">
      <h1 className="text-2xl" style={{ fontSize: `${fontSize}px` }}>
        {text}
      </h1>
    </div>
  );
}

export default CourseCard;
