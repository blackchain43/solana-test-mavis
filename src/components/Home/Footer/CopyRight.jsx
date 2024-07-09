import FacebookIcon from "../../../assets/icons/facebook.png";
import TwitterIcon from "../../../assets/icons/twitter.png";
import InstagramIcon from "../../../assets/icons/instagram.png";

const CopyRight = () => {
  return (
    <div className="xl:max-w-[75rem] mx-auto flex flex-col xl:flex-row xl:gap-y-0 gap-y-2 items-center justify-between py-6 px-8 xl:px-0">
      <div className="text-neutrals/6 text-xs xl:text-base">
        Copyright © 2022 LLC. All rights reserved
      </div>
      <div className="flex items-center space-x-6">
        <img src={FacebookIcon} />
        <img src={TwitterIcon} />
        <img src={InstagramIcon} />
      </div>
    </div>
  );
};

export default CopyRight;
