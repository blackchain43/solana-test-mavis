import clsxm from "../../../utils/clsxm";

import HomePortfolioBanner, {
  LeftPhone,
  RightPhone,
} from "../../Icons/HomePortfolio";
import StepBuild from "../Content/StepBuild";
import SectionTitle from "../SectionTitle";

const HOME_CONTENT_STEP_BUILD = [
  {
    title: "Leverage up to 100x",
    description:
      "Leverage thousands of token on Whallex and trade with ample liquidity.",
    icon: "/images/home/home-usp.webp",
  },
  {
    title: "Multiple device",
    description:
      "Whallex is synced across all devices. So you can use it from any device.",
    icon: "/images/home/home-pc.webp",
  },
  {
    title: "Low Fees",
    description:
      "Besides the high level of security and quickness in executing trades, you also benefit from low fees – a flat rate of 0.02% on every trade.",
    icon: "/images/home/home-candle.webp",
  },
  {
    title: "Without KYC",
    description: `No KYC with us, everything is completely confidential.`,
    icon: "/images/home/home-shield.webp",
  },
];

const SectionMask = ({ className }) => {
  return (
    <div
      className={clsxm(
        "w-[439px] h-[439px] absolute top-[20%] bg-primary/1 blur-[400px] rounded-full items-center shrink-0",
        className
      )}
    ></div>
  );
};

const SectionPortfolio = () => {
  return (
    // <div className="py-12 lg:py-28">
    <div className="grid p-6 lg:grid-cols-3 lg:p-0 mt-16">
      <div className="lg:col-span-2">
        <SectionTitle text="Start building your" highlight="portfolio" />
        <div className="grid lg:grid-cols-2 xl:gap-16 gap-8 mt-28 max-w-sm lg:max-w-none">
          {HOME_CONTENT_STEP_BUILD.map((item, index) => (
            <StepBuild
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <div className="lg:-translate-y-10 mt-12 lg:mt-0 relative hidden lg:block">
        <SectionMask />
        <HomePortfolioBanner />
        <LeftPhone className="w-[7rem] md:w-[12rem] lg:w-[13rem] absolute top-[6%] left-[30%] animate-[ma-bounce_3.5s_ease-in-out_infinite] mt-2 lg:mt-0" />
        <RightPhone className="w-[7rem] md:w-[12rem] lg:w-[13rem] absolute bottom-[3%] right-0 animate-[ma-bounce_3.5s_0.25s_ease-in-out_infinite] mt-2 lg:mt-0" />
      </div>
    </div>
  );
};

export default SectionPortfolio;
