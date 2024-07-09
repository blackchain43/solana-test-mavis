import SectionTitle from "../SectionTitle";

const mockNews = [
  {
    title: "Polygon Insights",
    time: "Oct 04, 2022",
    description:
      "J.P.Morgan and Singapore’s regulatory authority made their first live trade in DeFi #PoweredByPolygon; Franklin launched its open beta version for testing on the Polygon, and more.",
    image: "/images/home/news/news2.webp",
    link: "",
  },
  {
    title:
      "Validator Decentralization: Protecting the Network, Securing the Future ",
    time: "Oct 04, 2022",
    description:
      "On Polygon, a validator is a network participant who locks up MATIC tokens in the system and runs Heimdall validator and Bor block producer nodes in order to help run the network.",
    image: "/images/home/news/news3.webp",
    link: "",
  },
  {
    title: "Polygon Devs Shine at Alliance DAO’s Demo Day",
    time: "Oct 04, 2022",
    description:
      "At Alliance DAO demo day, teams pitched solutions to real-world problems, with Polygon devs delivering some of the most memorable projects.",
    image: "/images/home/news/news4.webp",
    link: "",
  },
];

const SectionNews = () => {
  return (
    <div className="page-container pt-10">
      <SectionTitle
        text="Explore trending articles about"
        highlight="Futures News"
        cxHighlight="block"
      />
      <div className="lg:grid lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-0 mt-12">
        <div className="h-full bg-linear/1 border-linear-1 p-6 flex flex-col mb-8">
          <div className="w-full h-80 overflow-hidden">
            <img
              src="/images/home/news/news1.webp"
              className="object-center"
              alt=""
            />
          </div>
          <div className="mt-8">
            <a
              href="https://sui.io/events/dsrv-x-sui-summer/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-3xl block mb-4"
            >
              DSRV x Sui: Web 3.0 Builder’s Summer House
            </a>
            <span className="font-light text-neutrals/6">
              We’re collaborating with DSRV in their Web 3.0 Builder’s Summer
              House where you can chill, connect and code with us!
            </span>
          </div>
          <span className="mt-auto text-sm text-neutrals/8">
            Monday, Aug 1, 2022 - Aug 3, 2022
          </span>
        </div>
        <div className="lg:col-span-2 space-y-8">
          {mockNews.map((item, key) => (
            <div
              className="border-linear-1 bg-linear/1 p-6 flex justify-between w-full"
              key={key}
            >
              <div className="flex-auto lg:max-w-[42rem] flex flex-col h-[auto]">
                <a
                  href={item.link}
                  className="text-3xl font-medium mb-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
                <div className="font-light text-neutrals/6 mt-auto">
                  {item.description}
                </div>
                <div className="text-sm text-neutrals/8 mt-auto">
                  {item.time}
                </div>
              </div>
              <div className="w-36 h-36 overflow-hidden">
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionNews;
