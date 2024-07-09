import InlineSVG from "react-inlinesvg";
import clsxm from "../../../utils/clsxm";

export const BUTTON_VARIANTS = {
  BTN_ACTIVE_LIGHT: "BTN_ACTIVE_LIGHT",
  BTN_ACTIVE_DARK: "BTN_ACTIVE_DARK",
  BTN_INACTIVE: "BTN_INACTIVE_DEFAULT",
  BTN_SUCCESS: "BTN_SUCCESS",
  BTN_BUY: "BTN_BUY",
  BTN_SELL: "BTN_SELL",
  BTN_TRADE_ACTION: "BTN_TRADE_ACTION",
  BTN_DANGER: "BTN_DANGER",
  BTN_TEXT: "BTN_TEXT",
  BTN_ICON: "BTN_ICON",
  BTN_SECONDARY: "BTN_SECONDARY",
  // sub nav button
  SUB_NAV_DARK_ACTIVE: "SUB_NAV_DARK_ACTIVE",
  SUB_NAV_LIGHT_ACTIVE: "SUB_NAV_LIGHT_ACTIVE",
  SUB_NAV: "SUB_NAV_DEFAULT",

  TAB: "TAB",

  OUTLINE: "OUTLINE",
};
const Button = ({
  type = "button",
  onClick,
  className = "",
  children,
  isLoading = false,
  variant = BUTTON_VARIANTS.BTN_ACTIVE_LIGHT,
  isDisabled = false,
  active = false,
  size = "lg",
  ...rest
}) => {
  const cxButton = clsxm(
    "border border-current outline-none font-bold text-sm text-neutrals/8 inline-flex justify-center items-center transition-all py-3",
    {
      // spacing
      "py-1.5 px-4":
        variant === BUTTON_VARIANTS.SUB_NAV_DARK_ACTIVE ||
        BUTTON_VARIANTS.SUB_NAV,

      // color variant
      "border-none bg-semantic/success":
        variant === BUTTON_VARIANTS.BTN_SUCCESS,
      "border-none bg-semantic/error": variant === BUTTON_VARIANTS.BTN_DANGER,
      "border-none bg-linear/3 p-3 w-full text-neutrals/2":
        variant === BUTTON_VARIANTS.BTN_ACTIVE_LIGHT,
      "bg-gradient-to-br from-neutrals/3 to-primary/1/10 border-primary/1 rounded-sm text-primary/1":
        variant === BUTTON_VARIANTS.BTN_BUY,
      "bg-gradient-to-br from-neutrals/3 to-primary/sell1/20 border-primary/sell1 rounded-sm text-primary/sell1":
        variant === BUTTON_VARIANTS.BTN_SELL,
      "bg-primary/1 text-neutrals/2 p-3 w-full":
        variant === BUTTON_VARIANTS.BTN_ACTIVE_DARK,
      "bg-neutrals/transparent border-neutrals/3":
        variant === BUTTON_VARIANTS.SUB_NAV && active && true,
      "bg-transparent border border-neutrals/5 border text-neutrals/6":
        variant === BUTTON_VARIANTS.SUB_NAV_DARK_ACTIVE,
      "border-primary/1 text-primary/1":
        (variant === BUTTON_VARIANTS.SUB_NAV ||
          BUTTON_VARIANTS.SUB_NAV_DARK_ACTIVE) &&
        active,
      "bg-neutrals/4 border-neutrals/4 text-neutrals/6 hover:border-primary/1 hover:text-primary/1":
        variant === BUTTON_VARIANTS.SUB_NAV && !active,
      "h-10 w-10 bg-neutrals/1 border border-neutrals/4 p-0":
        variant === BUTTON_VARIANTS.BTN_ICON,
      "bg-neutrals/2 border-neutrals/2 rounded-md":
        variant === BUTTON_VARIANTS.BTN_TRADE_ACTION,
      "bg-neutrals/2 border-neutrals/2":
        variant === BUTTON_VARIANTS.SUB_NAV_LIGHT_ACTIVE,
      // border
      "border-none p-0 bg-transparent text-primary/1 font-light":
        variant === BUTTON_VARIANTS.BTN_TEXT,
      "border-none pb-4 pt-1": variant === BUTTON_VARIANTS.TAB,
      "text-primary/1 border-none": variant === BUTTON_VARIANTS.TAB && active,

      "border border-neutrals/5 text-neutrals/6":
        variant === BUTTON_VARIANTS.OUTLINE,
      "border border-neutrals/5 bg-neutrals/5 text-neutrals/6":
        variant === BUTTON_VARIANTS.BTN_SECONDARY,
      // loading || disable state
      "opacity-70 cursor-not-allowed": isLoading,
      "bg-neutrals/5 cursor-not-allowed	": isDisabled,
    },
    {
      // spacing
      "py-2": size === "md",
    },
    className
  );

  return (
    <button
      type={type}
      className={cxButton}
      onClick={onClick}
      disabled={isLoading || isDisabled}
      {...rest}
    >
      {children}
      {isLoading && (
        <InlineSVG
          src="/images/spin.svg"
          className={clsxm("w-5 ml-auto animate-spin")}
        />
      )}
    </button>
  );
};

export default Button;
