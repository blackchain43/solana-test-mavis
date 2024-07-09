const IconMask = () => (
  <div className="absolute top-9 left-2 flex justify-center w-[200px] h-[153px] overflow-hidden">
    <div className="w-12 h-12 xl:w-12 xl:h-12 bg-primary/1 blur-[30px] rounded-full items-center shrink-0"></div>
  </div>
);

const StepBuild = ({ icon, title, description }) => {
  return (
    <div className="inline-flex flex-col shrink-0 gap-12 relative ">
      <IconMask />

      <div className="flex">
        <div className="flex-auto">
          <img src={icon} alt="" className="w-16 h-24 m-auto" />
        </div>
        <div className="flex-auto	"></div>
      </div>

      <div>
        <div className="text-base xl:text-3xl text-neutrals/8 font-medium mb-1">
          {title}
        </div>
        {/* <div className="text-neutrals/6 xl:text-base text-sm xl:w-[31.875rem]">{description}</div> */}
        <div className="text-neutrals/6 xl:text-base text-sm font-light text-justify	">
          {description}
        </div>
      </div>
    </div>
  );
};

export default StepBuild;
