import { useState, useEffect } from "react";

function TechCard({ text, col }: { text: string; col: string }) {
  const [fontSize, setFontSize] = useState<number>(24);
  const backgroundColor =
    col === "teal"
      ? "bg-teal-200"
      : col === "lime"
      ? "bg-lime-200"
      : "bg-gray-200";

  useEffect(() => {
    const containerWidth = 150;
    const containerHeight = 60;
    const textLength = text.length;
    const maxWidth = containerWidth * 0.95;

    const newFontSize = Math.min(maxWidth / textLength, containerHeight * 0.8);

    setFontSize(newFontSize);
  }, [text]);

  return (
    <div
      className={
        "flex justify-center items-center w-32 h-12 lg:w-40 lg:h-16 m-2 rounded-lg " +
        backgroundColor
      }
    >
      <h1 style={{ fontSize: `${fontSize}px` }}>{text}</h1>
    </div>
  );
}

export default TechCard;
