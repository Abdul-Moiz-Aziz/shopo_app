import { useEffect, useState } from "react";
import QuickViewWrapper from "../../components/common/quickViewWrapper";
import AdSection from "../../components/home/adSection";
import BestProductsSection from "../../components/home/bestProductsSection";
import BestSeller from "../../components/home/bestSeller";
import GetOurLatestOffer from "../../components/home/getOurLatestOffer";
import HeroSection from "../../components/home/heroSection";
import OneAdSection from "../../components/home/oneAdSection";
import PopularCategory from "../../components/home/popularCategory";
import ShopByBrand from "../../components/home/shopByBrand";
import TopRatedProducts from "../../components/home/topRatedProducts";
import axiosInstance from "../../api/axios";

const Home = () => {
  useEffect(() => {
    axiosInstance
      .get("/test-api")
      .then((response) => {
        console.log("API is working", response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="bg-[#f8f8f8]">
      <HeroSection />
      <ShopByBrand />
      <PopularCategory />
      <TopRatedProducts />
      <BestSeller />
      <AdSection />
      <OneAdSection />
      <BestProductsSection />
      <GetOurLatestOffer />
      <QuickViewWrapper />
    </div>
  );
};

export default Home;
