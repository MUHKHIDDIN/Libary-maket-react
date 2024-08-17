import React from "react";

export const MainNew = () => {
  return (
    <div className="container pb-[50px]">
      <div className="flex items-center justify-between pb-[32px] ">
        <h1 className="text-primary font-weight: 600; font-size: 1.5rem; mb-[32px] ">
          Янги қўшилганлар
        </h1>
        <img src="public/new-icon.svg" alt="icon" />
      </div>
      <div className="flex items-center justify-between ">
        <img src="new-img1.svg" alt="img" />
        <img src="new-img2.svg" alt="img" />
        <img src="new-img3.svg" alt="img" />
        <img src="new-img4.svg" alt="img" />
        <img src="new-img5.svg" alt="img" />
      </div>
    </div>
  );
};
