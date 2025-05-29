import React from "react";
import FeatureIcons from "../common/featureIcons";
import HomeBanner from "./homeBanner";
import BannerCategories from "./bannerCategories";

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full pt-[30px] pb-[30px]">
      <div className="mb-[30px] w-full px-2 md:mb-[60px] md:px-6 xl:px-[75px] bg-secondary">
        <HomeBanner />
        <FeatureIcons />
        <BannerCategories />
      </div>
    </div>
  );
};

export default HeroSection;
