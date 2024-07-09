import Button from "../../Core/Button";
import { BUTTON_VARIANTS } from "../../Core/Button";
function PageHeader() {
  return (
    <div className="flex justify-between items-center w-full p-6 px-16 border-b border-neutrals/3">
      <h2 className="font-bold text-2xl">Test Solana</h2>
      <div>
        <Button variant={BUTTON_VARIANTS.BTN_TEXT}>Log Out</Button>
      </div>
    </div>
  );
}

export default PageHeader;
