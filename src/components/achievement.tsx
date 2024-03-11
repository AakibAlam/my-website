function AchievementCard({ header, desc }: { header: string; desc: string }) {
  return (
    <div className="mx-4 py-4 rounded-xl bg-neutral-200">
      <p className="text-3xl text-center text-blue-500">{header}</p>
      <div className="text-center pt-4">
        <p className="text-gray-500 px-4 text-justify">{desc}</p>
      </div>
    </div>
  );
}

export default AchievementCard;
