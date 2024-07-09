const SubcribeForm = () => {
  return (
    <div className="flex xl:justify-center col-span-4 xl:mt-0 mt-8">
      <div className="flex flex-col xl:ml-[15%]">
        <div className="font-bold text-neutrals/8">NEWSLETTER</div>
        <div>
          <div className="mt-10 mb-2 space-y-2 text-neutrals/8 text-sm">
            Subscribe our newsletter to get more free design course and resource
          </div>
          <input
            type="text"
            className="bg-transparent border px-4 py-2 rounded-lg border-neutrals/3"
            placeholder="Email/Phone number"
          />
        </div>
      </div>
    </div>
  );
};

export default SubcribeForm;
