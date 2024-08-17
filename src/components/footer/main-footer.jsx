import React from "react";

export const MainFooter = () => {
  return (
    <div className="bg-[#EEF4FF] pt-[30px] pl-[75px] pr-[200px] pb-[60px]">
      <div className="container">
        <div className="footer_top">
          <ul className="flex gap-[170px] ">
            <li>
              <h1 className="text-[black] font-weight: 600; font-size-[20px]; mb-[14px] w-full cursor-pointer">
                Платформа хақида
              </h1>
              <p className=" font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Liber ўзи нима?
              </p>
              <p className="font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Фойдаланиш шартлари
              </p>
              <p className="font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Ёрдам
              </p>
            </li>
            <li>
              <h1 className="text-[black] font-weight: 600; font-size-[20px]; mb-[14px] w-full cursor-pointer">
                Обуна хақида
              </h1>
              <p className=" font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Обуна бўлиш
              </p>
              <p className="font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Қандай тўлаш
              </p>
            </li>
            <li>
              <h1 className="text-[black] font-weight: 600; font-size-[20px]; mb-[14px] w-full cursor-pointer">
                Китоблар
              </h1>
              <p className=" font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Аудио китоблар
              </p>
              <p className="font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Электрон китоблар
              </p>
              <p className="font-weight: 400; font-size: 1rem; mb-[18px] w-full cursor-pointer">
                Китоблар
              </p>
            </li>
            <li>
              <h1 className="text-[#11142C] w-full cursor-pointer  font-weight: 00; font-size-[20px]; mb-[14px] ">
                Мобил илова
              </h1>
              <img
                className="w-full cursor-pointer image mb-[16px]"
                src="footer-top.img.svg "
                alt=" imgage "
              />
              <img
                className="w-full cursor-pointer"
                src="footer-top.img2.svg"
                alt="image"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

