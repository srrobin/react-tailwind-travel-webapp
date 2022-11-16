import React from "react";
const Select = (props) => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {props.imageCardData.map((item) => (
        <div className="relative">
          <img src={item.img} alt="/" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30">
            <p className="text-white uppercase text-xl font-bold left-4 bottom-4 absolute">
              {item.imgtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Select;
