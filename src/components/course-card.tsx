import { useState, useEffect } from "react";

function CourseCard({ text, col }: { text: string; col: string }) {
  const [fontSize, setFontSize] = useState<number>(24);

  useEffect(() => {
    const containerWidth = 400;
    const containerHeight = 200;
    const textLength = text.length;
    const maxWidth = containerWidth * 0.95;

    const newFontSize = Math.min(maxWidth / textLength, containerHeight * 0.8);

    setFontSize(newFontSize);
  }, [text]);

  return (
    <div
      className={`flex justify-center items-center text-center w-64 md:w-96 h-16 md:h-20 m-2 md:m-4 rounded-lg bg-${col}-200`}
    >
      <h1 style={{ fontSize: `${fontSize}px` }}>{text}</h1>
    </div>
  );
}

export default CourseCard;
