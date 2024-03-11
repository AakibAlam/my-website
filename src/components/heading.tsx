function Heading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-8">
      <h1 className="text-slate-300 text-5xl lg:text-6xl mt-16 mb-8">
        {title}
      </h1>
      <p className="text-2xl text-center px-2 py-4 italic">{description}</p>
    </div>
  );
}

export default Heading;
