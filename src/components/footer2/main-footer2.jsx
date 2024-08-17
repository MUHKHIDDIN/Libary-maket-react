import React from "react";

export const MainFooter2 = () => {
  return (
    <div className="bg-[#10182C] pt-[12px] pr-[[490px] pb-[34px] pr-[40px]">
      <div className="container">
        <div className="footer_bootom">
          <ul className="flex  gap-[70px] ">
            <li>
              <p className="text-white mb-[10px]">Ижтимоий тармоқлар</p>
              <a href="#">
                <img src="footer-icon2.svg" alt="" />
              </a>
            </li>
            <li>
              <p className="text-white mb-[10px]">Боғланиш</p>
              <a className="text-white" href="#">
                +998 90 253 77 53
              </a>
            </li>
            <li>
              <a className="text-white pt-[80px]" href="#">
                support@liber.uz
              </a>
            </li>
            <li>
              <p className="text-white ">Биз қабул қиламиз</p>
              <div className="flex gap-[8px]">
                <img className="cursor-pointer"  src="public/footer-icon3.svg" alt="icon" />
                <img className="cursor-pointer"  src="public/footer-icon4.svg" alt="icon" />
                <img  className="cursor-pointer" src="public/footer-icon5.svg" alt="icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
