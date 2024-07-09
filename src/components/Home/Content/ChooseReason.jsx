const ChooseReason = ({ icon, title, description }) => {
  return (
    <div>
      <img src={icon} alt="" className="mx-auto mb-3 w-20" />
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-neutrals/6 mt-2">{description}</div>
      </div>
    </div>
  );
};

export default ChooseReason;
