import React from "react";
import { ServiceIcon } from "../../assets/service-icon";
import { ServiceIcon2 } from "../../assets/service-icon2";
import { ServiceIcon3 } from "../../assets/service-icon3";
import { ServiceIcon4 } from "../../assets/service-icon4";


export const MainFast = () => {
  return (
    <div className="container">
      <ul className="flex items-center justify-between pb-[40px]">
        <li>
          <div className="flex items-center justify-between gap-2.5 w-[322px]">
            <span className="w-[50px]">
              <ServiceIcon />
            </span>
            <div>
              <h2 className="w-[133px] mb-2 text-gray-800 font-semibold">
                Тезкор етказиш
              </h2>
              <p className="text-gray-600 w-[290px] text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between gap-2.5 w-[322px]">
            <span className="w-[50px]">
              <ServiceIcon2 />
            </span>
            <div>
              <h2 className="w-[133px] mb-2 text-gray-800 font-semibold">
                Тўлов химояси
              </h2>
              <p className="text-gray-600 w-[290px] text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between gap-2.5 w-[322px]">
            <span className="w-[50px]">
              <ServiceIcon3 />
            </span>
            <div>
              <h2 className="w-[133px] mb-2 text-gray-800 font-semibold">
                Юқори сифат
              </h2>
              <p className="text-gray-600 w-[290px] text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex items-center justify-between gap-2.5 w-[322px]">
            <span className="w-[50px]">
              <ServiceIcon4 />
            </span>
            <div>
              <h2 className="w-[139px] mb-2 text-gray-800 font-semibold">
                Энг сара китоблар
              </h2>
              <p className="text-gray-600 w-[290px] text-sm leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
