import React from "react";
import { MainHeader } from "./components/header/main-header";
import { MainHero } from "./components/hero/main-hero";
import { MainBooks } from "./components/books/main-books";
import { MainFast } from "./components/fast/main-fast";
import { MainRucunlar } from "./components/rucunlar/main-rucunlar";
import { MainNew } from "./components/new/main-new";
import { MainAudio } from "./components/audioo/main.audio";
import{ MainFooter } from "./components/footer/main-footer";
import{ MainFooter2 } from "./components/footer2/main-footer2";


function App() {
  return (
    <div className="App">
      <MainHeader />
      <MainHero />
      <MainBooks />
      <MainFast />
      <MainRucunlar />
      <MainNew />
      <MainAudio />
      <MainFooter />
      <MainFooter2 />
    </div>
  );
}

export default App;
