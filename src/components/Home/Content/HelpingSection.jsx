import { Button } from "../../Core";
import SectionTitle from "../SectionTitle";
import { BUTTON_VARIANTS } from "../../Core/Button/index";
const HOME_HELPING_CONTENT = [
  {
    icon: (
      <svg
        className="w-9 h-9 lg:w-12 lg:h-12"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9321_143314)">
          <path
            d="M12.75 20.0879C10.4237 20.0879 8.53125 21.9803 8.53125 24.3066V35.7441C8.53125 38.0705 10.4237 39.9629 12.75 39.9629C15.0763 39.9629 16.9688 38.0705 16.9688 35.7441V24.3066C16.9688 21.9803 15.0763 20.0879 12.75 20.0879Z"
            fill="#5DE8BE"
          />
          <path
            d="M5.71875 24.3065C5.71875 23.9009 5.77228 23.509 5.83856 23.1221C4.14375 23.6699 2.90625 25.2441 2.90625 27.119V32.9315C2.90625 34.8064 4.14375 36.3807 5.83856 36.9284C5.77228 36.5415 5.71875 36.1497 5.71875 35.744V24.3065Z"
            fill="#5DE8BE"
          />
          <path
            d="M35.25 20.0879C32.9237 20.0879 31.0312 21.9803 31.0312 24.3066V35.7441C31.0312 38.0705 32.9237 39.9629 35.25 39.9629C35.6728 39.9629 36.0733 39.8815 36.4586 39.7653C35.9351 41.5005 34.3411 42.7754 32.4375 42.7754H27.9597C27.3773 41.1421 25.8309 39.9629 24 39.9629C21.6737 39.9629 19.7812 41.8553 19.7812 44.1816C19.7812 46.508 21.6737 48.4004 24 48.4004C25.8309 48.4004 27.3773 47.2212 27.9597 45.5879H32.4375C36.3143 45.5879 39.4688 42.4335 39.4688 38.5566V35.7441V24.3066C39.4688 21.9803 37.5763 20.0879 35.25 20.0879Z"
            fill="#5DE8BE"
          />
          <path
            d="M42.1614 23.1221C42.2277 23.509 42.2812 23.9009 42.2812 24.3065V35.744C42.2812 36.1497 42.2277 36.5415 42.1614 36.9284C43.8562 36.3807 45.0937 34.8064 45.0937 32.9315V27.119C45.0937 25.2441 43.8562 23.6699 42.1614 23.1221Z"
            fill="#5DE8BE"
          />
          <path
            d="M24 0.400391C12.3682 0.400391 2.90625 9.86239 2.90625 21.4941V21.53C3.74409 20.8957 4.71347 20.4316 5.78316 20.2237C6.44044 10.7364 14.3488 3.21289 24 3.21289C33.6512 3.21289 41.5596 10.7364 42.2168 20.2236C43.2864 20.4315 44.2558 20.8957 45.0938 21.53V21.4941C45.0938 9.86239 35.6317 0.400391 24 0.400391Z"
            fill="#5DE8BE"
          />
        </g>
        <defs>
          <clipPath id="clip0_9321_143314">
            <rect
              width="48"
              height="48"
              fill="white"
              transform="translate(0 0.400391)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "24/7 Chat Support",
    description:
      "Get 24/7 chat support with our friendly customer service agents at your service.",
    button: {
      title: "Chat now",
    },
  },
  {
    icon: (
      <svg
        className="w-9 h-9 lg:w-12 lg:h-12"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.037 31.4316H14.1562C21.9098 31.4316 28.2188 25.1227 28.2188 17.3691C28.2188 9.61555 21.9098 3.30664 14.1562 3.30664C6.40266 3.30664 0 9.61555 0 17.3691C0 21.0756 1.55494 24.6133 4.13531 27.2348L2.037 31.4316ZM15.5625 25.8066H12.75V22.9941H15.5625V25.8066ZM14.1562 8.93164C17.2585 8.93164 19.7812 11.4544 19.7812 14.5566C19.7812 16.6578 18.6235 18.5694 16.76 19.543C16.0212 19.9303 15.5625 20.7557 15.5625 21.5879H12.75C12.75 19.6351 13.7869 17.924 15.4553 17.0519C16.3892 16.563 16.9688 15.6072 16.9688 14.5566C16.9688 13.0062 15.7067 11.7441 14.1562 11.7441C12.6058 11.7441 11.3438 13.0062 11.3438 14.5566H8.53125C8.53125 11.4544 11.054 8.93164 14.1562 8.93164Z"
          fill="#5DE8BE"
        />
        <path
          d="M31.0163 17.6639C30.892 24.7993 26.3214 30.8535 19.9595 33.1944C20.838 40.1098 26.6937 45.4941 33.8438 45.4941H45.963L43.8646 41.2973C46.4451 38.6758 48 35.1381 48 31.4316C48 23.6652 41.6102 17.3691 33.8438 17.3691C32.8761 17.3691 31.9306 17.4712 31.0163 17.6639ZM40.875 35.6504H29.625V32.8379H40.875V35.6504ZM40.875 30.0254H29.625V27.2129H40.875V30.0254Z"
          fill="#5DE8BE"
        />
      </svg>
    ),
    title: "FAQs",
    description: "View FAQs for detailed instructions on specific features.",
    button: {
      title: "Chat now",
    },
  },
];

const HelpingSection = () => {
  return (
    <>
      <SectionTitle text="Need" highlight="help?" />
      <div className="grid lg:grid-cols-2 gap-x-10 gap-y-9 mb-40 mt-16">
        {HOME_HELPING_CONTENT.map((item, idx) => (
          <div className="h-full w-full border-linear-2" key={idx}>
            <div className="w-full h-full p-8 flex bg-linear/1">
              <div className="">{item.icon}</div>
              <div className="ml-8 flex-auto flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-xl">{item.title}</h3>
                  <div className="mt-1 text-neutrals/6 font-light">
                    {item.description}
                  </div>
                </div>
                <Button
                  variant={BUTTON_VARIANTS.BTN_TEXT}
                  className="text-primary/1 mr-auto mt-3"
                  onClick={item.button?.onClick}
                >
                  {item.button?.title}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HelpingSection;
