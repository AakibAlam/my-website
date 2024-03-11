function ProjectCard({
  img,
  name,
  desc,
  github,
  demo,
}: {
  img: string;
  name: string;
  desc: string;
  github: string;
  demo: string;
}) {
  return (
    <div className="mx-4 lg:mx-8 w-full bg-neutral-200 rounded-xl text-gray-900">
      <div className="rounded-t-lg h-40 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src={img}
          alt="project"
        />
      </div>
      <div className="rounded-b-lg">
        <div className="text-center pt-4">
          <h2 className="font-semibold py-2 text-2xl">{name}</h2>
          <p className="text-gray-500 px-4 text-justify">{desc}</p>
        </div>
        <div className="flex justify-center gap-16 py-8">
          <a
            href={github}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            GitHub
          </a>
          {demo.length > 0 && (
            <a
              href={demo}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
