import LaptopMock from "../../Icons/LaptopMock";
import { MacIcon, WindowIcon } from "../../Icons/OSIcon";
import PhoneMock from "../../Icons/PhoneMock";
import SectionTitle from "../SectionTitle";

const SectionTrade = () => {
  return (
    <div className="page-container">
      <div className="bg-neutrals/3/40 p-6 lg:p-12">
        <div className="text-left relative">
          <SectionTitle text="Trade" highlight="Anywhere, Anytime" />
          <div className="text-neutrals/6 text-xs md:text-base mt-3">
            Fast and reputable trading feature with more than 100 trading pairs
          </div>
          <div className="lg:flex mx-auto lg:mr-auto lg:mx-0 mt-12">
            <div className="space-y-6">
              <div className="p-6 bg-neutrals/2/30 flex">
                <img
                  src="/images/qrcode.png"
                  alt="qr-code"
                  className="lg:w-32 lg:h-auto w-20 h-20  mr-6"
                />
                <div className="my-auto">
                  <h2 className="font-light text-neutrals/6">
                    Scan to download
                  </h2>
                  <div className="text-3xl lg:text-4xl font-medium">
                    iOS & Android
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div className="p-3 lg:p-6 bg-neutrals/2/30 flex items-center justify-center space-x-3">
                  <MacIcon />
                  <div>
                    <h2 className="text-xs lg:text-sm font-light text-neutrals/6">
                      Download for
                    </h2>
                    <div className="font-bold">macOS</div>
                  </div>
                </div>
                <div className="p-3 lg:p-6 bg-neutrals/2/30 flex items-center justify-center space-x-3">
                  <WindowIcon />
                  <div>
                    <h2 className="text-xs lg:text-sm font-light text-neutrals/6">
                      Download for
                    </h2>
                    <div className="font-bold">Windows</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-12 mt-12 lg:mt-0 flex-auto lg:-translate-y-4 relative">
              <LaptopMock className="max-w-[36rem] mx-auto" />
              <PhoneMock className="absolute right-0 bottom-0 translate-x-10 lg:-translate-x-8 translate-y-16 w-[3rem] lg:w-[6.75rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTrade;
