import { ArrowNarrowRightIcon } from "@heroicons/react/outline";
import CaroBG from "../../assets/home/CaroBG";
import clsxm from "../../utils/clsxm";
import Button from "../Core/Button";
import ChevronIcon from "../Icons/ChevronIcon";

const HOME_VOLUME_CONTENT = [
  {
    title: "Trading volume",
    price: 1241563903,
    percentChange: -1.71,
    description: "exchanged in the last 24h",
  },
  {
    title: "Open Interest",
    price: 246843123,
    percentChange: 1.71,
    description: "in open positions on Whallex",
  },
  {
    title: "Trades",
    price: 213258,
    percentChange: 1.71,
    description: "executed in the last 24h",
  },
];

const HOME_BANNER_CONTENT = [
  {
    title: "Total Trading Volume",
    value: "$773.79m",
    position:
      "top-[35.5%] right-[68.75%] origin-top-right lg:scale-100 scale-50",
  },
  {
    title: "Active Positions",
    value: "$732.6k",
    position: "top-[8.25%] left-1/2 origin-top-left lg:scale-100 scale-[46%]",
  },
  {
    title: "Total Insurance",
    value: "$132.79k",
    position: "top-[65%] left-[46.5%] origin-top-left lg:scale-100 scale-50",
  },
];

const BannerContent = ({ position, title, children }) => {
  return (
    <div
      className={clsxm(
        "absolute border border-linear-1 px-4 py-2 bg-linear/1 backdrop-blur-sm text-neutrals/7",
        position
      )}
    >
      <h2 className="text-xs text-light whitespace-nowrap">{title}</h2>
      <div className="text-sm font-medium">{children}</div>
    </div>
  );
};

const VolumeContent = ({
  title,
  price = 0,
  percentChange = 0,
  description = "",
}) => {
  return (
    <div className="h-full w-full border-linear-2 bg-linear/1 p-8 space-y-2">
      <h3 className="font-medium text-xl text-primary/1">{title}</h3>
      <div className="flex items-start space-x-2">
        <span className="text-3xl font-medium">${price.toLocaleString()}</span>
        <span
          className={clsxm("flex", {
            "text-primary/1": percentChange > 0,
            "text-primary/sell1": percentChange < 0,
          })}
        >
          <ChevronIcon
            className={clsxm("mt-1 mr-1", {
              "fill-primary/1": percentChange > 0,
              "fill-primary/sell1 rotate-180": percentChange < 0,
            })}
          />
          <span>{percentChange}</span>
        </span>
      </div>
      <div className="mt-1 text-neutrals/6 font-light">{description}</div>
    </div>
  );
};
const HomeContent = () => {
  return (
    <>
      <div className="page-container grid lg:grid-cols-3 mt-12 bg-transparent relative">
        <div className="w-[439px] h-[439px] absolute top-1 right-1/4 bg-primary/1 blur-[400px] rounded-full items-center shrink-0" />
        <div className="lg:pt-4 relative order-2 lg:order-1">
          <div className="text-5xl font-medium max-w-sm mt-12 lg:mt-0">
            Hold, buy and trade crypto futures
          </div>
          <div className="text-neutrals/6 mt-3 mb-8 text-sm font-light">
            Trade cryptocurrencies quickly, safely, easily
          </div>
          <Button className="border-none w-auto py-2">
            {`Let's Get Started`}{" "}
            <ArrowNarrowRightIcon className="ml-4 h-6 w-6" />
          </Button>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-2">
          <div className="relative lg:max-w-[50.25rem] lg:w-[50.25rem]">
            <CaroBG className="w-full" />
            <div className="w-[19.2rem] h-48 origin-top-left scale-[45.5%] lg:scale-100 bg-neutrals/3 absolute top-[52.7%] left-0 border border-neutrals/5 p-6">
              <div className="relative w-full h-full">
                <h2 className="text-sm font-medium text-primary/1">
                  Total Value Locked
                </h2>
                <div className="text-xl font-medium">$5,047,331</div>
                <div className="text-xs font-light text-neutrals/6">
                  May 12, 22
                </div>
                {/* <div className="absolute -bottom-1 left-0">
                  <ApexChart
                    data={[0, 1, 40, 35, 50, 45, 30, 40, 45, 40, 20, 20]}
                  />
                </div> */}
              </div>
            </div>
            <div className="w-[20.5rem] h-48 origin-top-right scale-[45.5%] lg:scale-100 bg-neutrals/3 absolute top-[21.75%] right-0 border border-neutrals/5 p-6">
              <div className="relative h-full w-full">
                <h2 className="text-sm font-medium text-primary/1">
                  Trading Volume 24h
                </h2>
                <div className="text-xl font-medium">$440,951</div>
                <div className="text-xs font-light text-neutrals/6">
                  May 12, 22
                </div>
                {/* <div className="absolute -bottom-1 left-0">
                  <ApexChart
                    data={[
                      20, 40, 79, 82, 100, 40, 35, 50, 45, 30, 40, 45, 40, 20,
                      20, 10, 20, 40, 79, 82, 100, 40, 35, 50, 45, 30,
                    ]}
                    type="bar"
                    strokeWidth={1}
                  />
                </div> */}
              </div>
            </div>
            {HOME_BANNER_CONTENT.map((item, idx) => (
              <BannerContent
                title={item.title}
                position={item.position}
                key={idx}
              >
                {item.value}
              </BannerContent>
            ))}
          </div>
        </div>
      </div>
      <div className="page-container bg-transparent pt-10 grid lg:grid-cols-3 gap-6">
        {HOME_VOLUME_CONTENT.map((item, idx) => (
          <VolumeContent {...item} key={idx} />
        ))}
      </div>
    </>
  );
};

export default HomeContent;
