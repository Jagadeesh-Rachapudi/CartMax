import React from "react";
import Ads from "../Components/HF/HF-Ads/Ads";
import AE from "../Components/HF/HF-AE/AE";
import Behind from "../Components/HF/HF-Behind/Behind";
import Blog from "../Components/HF/HF-Blog/Blog";
import ES from "../Components/HF/HF-ES/ES";
import Footer from "../Components/HF/HF-Footer/Footer";
import Hedder from "../Components/HF/HF-Hedder/Hedder";
import Instagram from "../Components/HF/HF-Instagram/Instagram";
import Mini from "../Components/HF/HF-Mini/Mini";
import MS from "../Components/HF/HF-MS/MS";
import NavBar from "../Components/HF/HF-NavBar/NavBar";
import Sales from "../Components/HF/HF-Sales/Sales";
import SE from "../Components/HF/HF-SE/SE";
import TopRibbon from "../Components/HF/HF-TopRibbon/TopRibbon";

export default function Home() {
  return (
    <div>
      <TopRibbon />
      <NavBar />
      <Hedder />
      <Ads />
      <Behind />
      <Sales />
      <Mini />
      <MS />
      <AE />
      <SE />
      <ES />
      <Blog />
      <Instagram />
      <Footer />
    </div>
  );
}
