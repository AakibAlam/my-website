function ImgCard({
  img,
  header,
  desc,
  profile,
}: {
  img: string;
  header: string;
  desc: string;
  profile: string;
}) {
  return (
    <div className="mx-4 w-full bg-neutral-200 rounded-xl text-gray-900">
      {img.length > 0 && (
        <div className="bg-white rounded-t-xl lg:h-44 overflow-hidden">
          <img
            className="object-cover object-top w-full h-full"
            src={img}
            alt="project"
          />
        </div>
      )}
      <div className="rounded-b-xl">
        {header.length > 0 && (
          <p className="text-5xl text-center text-blue-500 pt-4">{header}</p>
        )}
        <div className="text-center pt-4">
          <p className="text-gray-500 px-4 text-justify">{desc}</p>
        </div>
        <div className="flex justify-center gap-16 py-8">
          {profile.length > 0 && (
            <a
              href={profile}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              View Profile
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
