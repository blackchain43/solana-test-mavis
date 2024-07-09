const Volume = ({ title }) => {
  return (
    <div className="rounded-xl p-4 md:p-6 bg-neutrals/2 flex flex-col text-left">
      <span className="text-neutrals/4">24h Volume</span>
      <div className="md:text-4xl mt-2 mb-1 font-semibold">$ 1.00B</div>
      <span className="text-primary/100 text-xs md:text-sm">{title}</span>
    </div>
  );
};

export default Volume;
