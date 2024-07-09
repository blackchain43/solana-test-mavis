import { useEffect, useState } from "react";
import Button from ".";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import clsxm from "../../../utils/clsxm";

const ButtonCopy = ({ text, className }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [copied]);

  return (
    <CopyToClipboard text={text}>
      <Button
        onClick={() => setCopied(true)}
        className={clsxm("h-auto", className)}
      >
        {copied ? (
          <span className="bg-primary/1 text-neutrals/2 h-auto w-full rounded p-0.5 text-[0.625rem] grid place-items-center">
            Copied!
          </span>
        ) : (
          <div>
            <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer text-primary/1" />
          </div>
        )}
      </Button>
    </CopyToClipboard>
  );
};

export default ButtonCopy;
