import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { BUTTON_VARIANTS } from "../Core/Button";
import clsxm from "../../utils/clsxm";
import { Button } from "../Core";
import Logo from "../Icons/Logo";

const HOME_FOOTER_CONTENT = [
  {
    title: "Privacy",
    items: ["Terms of Use", "Privacy Policy", "Legal", "Risk Warning"],
  },
  {
    title: "Support",
    items: [
      "Support Center",
      "Promotions",
      "Referral Programs",
      "Feedback",
      "Trading Rules",
      "Fees",
    ],
  },
  {
    title: "Quick Access",
    items: [
      "Learn & Earn",
      "Browse Crypto Prices",
      "Blockchain",
      "Cryptocurrency",
      "NFT",
    ],
  },
];

const FooterContentItem = ({ items, title }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div>
      <div className="font-medium text-xl mb-2 lg:mb-6 flex justify-between items-center">
        <h2>{title}</h2>
        <Button
          variant={BUTTON_VARIANTS.BTN_TEXT}
          className="lg:hidden"
          onClick={() => setCollapse(!collapse)}
        >
          <PlusIcon className="w-5 h-5 text-neutrals/6" />
        </Button>
      </div>
      <ul
        className={clsxm(
          "space-y-2 lg:space-y-4 text-neutrals/6 text-sm block transition-all",
          {
            "hidden lg:block": !collapse,
          }
        )}
      >
        {items.map((content, idx) => (
          <li key={idx}>{content}</li>
        ))}
      </ul>
    </div>
  );
};

const HomeFooter = () => {
  return (
    <>
      <div className="bg-neutrals/3 relative min-h-[10rem] py-16 rounded-tl-[7.5rem] border-y border-y-neutrals/4 px-6">
        <div className="page-container lg:flex lg:justify-between space-y-6 lg:space-y-0">
          <div>
            <Logo className="w-24 mb-auto" />
          </div>
          {HOME_FOOTER_CONTENT.map((item, idx) => (
            <FooterContentItem {...item} key={idx} />
          ))}
          <div>
            <h2 className="font-medium text-xl mb-6">Community</h2>
            <div className="text-sm mb-8">
              <h2 className="text-neutrals/6 mb-1">Support Service</h2>
              <div>support@whallex.com</div>
            </div>
            <div className="text-sm">
              <h2 className="text-neutrals/6 mb-1">Support Service</h2>
              <div>support@whallex.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutrals/3 text-center py-6 text-neutrals/6">
        Copyright © 2022 <span className="text-primary/1">Whallex</span>. All
        rights reserved
      </div>
    </>
  );
};

export default HomeFooter;
