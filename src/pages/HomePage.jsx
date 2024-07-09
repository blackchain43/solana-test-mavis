import HelpingSection from "../components/Home/Content/HelpingSection";
import HomeIntroduce from "../components/Home/Content/HomeIntroduce";
import SectionNews from "../components/Home/Content/NewsSection";
import SectionRobotBanner from "../components/Home/Content/SectionRobotBanner";
import SectionTrade from "../components/Home/Content/SectionTrade";
import HomeContent from "../components/Home/HomeContent";
import HomeFooter from "../components/Home/HomeFooter";

const HomePage = () => {
  return (
    <div>
      <HomeContent />
      <HomeIntroduce />
      <div className="relative bg-gradient-to-b from-neutrals/3 via-primary/1/20 to-primary/1/20 pb-20">
        <div className="rounded-t-[8rem] absolute bottom-full w-full h-0 md:h-20 bg-neutrals/3 hidden md:block"></div>
        <SectionNews />
      </div>
      <div className="bg-gradient-to-t from-neutrals/3 via-primary/1/20 to-primary/1/20">
        <SectionTrade />
        <SectionRobotBanner />
      </div>
      <div className="page-container bg-neutrals/3">
        <HelpingSection />
      </div>
      <HomeFooter />
    </div>
  );
};

export default HomePage;
