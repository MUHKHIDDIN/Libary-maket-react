import React from "react";

export const MainHero = () => {
  return (
    <div className="container">
      <ul className="flex items-center gap-[20px] pb-[15px]">
        <li className="text-primary font-weight: 600; font-size: 1rem;">
          <p>Аудиокитоб</p>
        </li>
        <li className="text-primary font-weight: 600; font-size: 1rem;">
          <p>Электрон китоблар</p>
        </li>
        <li className="text-primary font-weight: 600; font-size: 1rem;">
          <p>Босма китоблар</p>
        </li>
        <li className="text-primary font-weight: 600; font-size: 1rem;">
          <p>Контакт</p>
        </li>
        <li className="text-primary font-weight: 600; font-size: 1rem;">
          <p>Биз хақимизда</p>
        </li>
      </ul>
    </div>
  );
};
