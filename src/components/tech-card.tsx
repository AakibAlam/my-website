function TechCard({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center w-28 h-12 lg:w-40 lg:h-16 m-2 rounded-lg bg-lime-200">
      <h1 className="texl:xl lg:text-2xl">{text}</h1>
    </div>
  );
}

export default TechCard;
