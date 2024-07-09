import clsxm from "../../utils/clsxm";

const SectionTitle = ({ text, highlight, cxHighlight }) => {
  return (
    <div className="text-4xl lg:text-5xl font-medium">
      <span>{text}</span>{" "}
      <span className={clsxm("text-primary/1", cxHighlight)}>{highlight}</span>
    </div>
  );
};

export default SectionTitle;
