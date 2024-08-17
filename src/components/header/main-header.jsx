import React from "react";
import { HeaderIcon1 } from "../../assets/header-icon1";
import { HeaderIcon2 } from "../../assets/header-icon2";
export const MainHeader = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navbar">
          <ul className="  flex pt-5 items-center justify-between pb-[21px]  ">
            <li className="mr-12">
              <img src="header-logo.svg" alt="logo" />
            </li>

            <li>
              <div className="flex items-center justify-between gap-[10px] py-[12px] px-[17px] border-[3px]  rounded-l-[14px] text-primary ml-[80px]  ">
                <img src="header-icon1.svg" alt="icon" />
                <p className="	font-weight: 600; font-size: 1rem; ">Рукнлар</p>
                <img src="header-icon2.svg" alt="icon" />
              </div>
            </li>
            <li>
              <form className="flex items-center mr-[60px] ">
                <input
                  className="py-[13px] pl-[30px] pr-[200px] border-[1px]"
                  placeholder="Қидириш"
                  type="text"
                />
                <button className="px-[24px] py-[12px] border-[1px]  rounded-r-[14px]">
                  <HeaderIcon1 />
                </button>
              </form>
            </li>
            <li>
              <img
                className="mr-[20px]"
                src="header-icon3.svg"
                alt="icon"
              />
            </li>
            <li>
              <button className="flex px-[24px] py-[12px] bg-primary text-white rounded-[14px] gap-[12px] hover:bg-transparent hover:text-primary border-[3px] border-primary">
                <HeaderIcon2 />
                <span>Кириш</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
