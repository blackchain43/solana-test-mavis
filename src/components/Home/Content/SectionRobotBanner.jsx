import HomeMascot from "../../Icons/HomeMascot";
import SectionTitle from "../SectionTitle";

const SectionRobotBanner = () => {
  return (
    <div className="page-container grid lg:grid-cols-2 my-28">
      <HomeMascot className="w-[20rem] mx-auto order-2 lg:order-1" />
      <div className="order-1 lg:order-2 text-left relative">
        <SectionTitle
          text="Deposit crypto and"
          highlight="earn interest"
          cxHighlight="block"
        />
        <div className="my-6 text-neutrals/6">
          Fast and reputable trading feature with more than 100 trading pairs
        </div>
        <img
          src="/images/home/plusicon.png"
          alt=""
          className="absolute right-0 -bottom-2 w-16"
        />
      </div>
    </div>
  );
};

export default SectionRobotBanner;
