import React from "react";
import banner from "../assets/assets/today_deal_web.gif";
import banner1 from "../assets/assets/ruky_web.jpg";
import banner2 from "../assets/assets/tabby_banner.jpg";
import banner3 from "../assets/assets/beauty-new.jpg";
import banner4 from "../assets/assets/clearance_sale.gif";
import bannerMobile from "../assets/assets/today_deal_mobile.gif";
import bannerMobile1 from "../assets/assets/ruky-m.jpg";
import bannerMobile2 from "../assets/assets/loveit_m.webp";
import bannerMobile3 from "../assets/assets/beauty-m.jpg";
import bannerMobile4 from "../assets/assets/cllearance-sale-m.gif";
import { useSelector } from "react-redux";
import { valideURLConvert } from "../utils/valideURLConvert";
import { Link, useNavigate } from "react-router-dom";
import CategoryWiseProductDisplay from "../components/CategoryWiseProductDisplay";
import CarouselComponents from "../components/Carousel";
import HomeCarouselData from "../common/homeFirstCarousel";
import ListsCarousel from "../components/ProductsListsCarousel";
import {CategoriesDatas} from "../common/categoriesData";
import ExitingOffer from "../components/ExitingOffer";
import DealOfTheDay from "../components/DealOfTheDay";
import PopularProducts from "../components/PopularProducts";
import PromotionalBanners from "../components/PromotionalBanners";
import TopSeller from "../components/TopSeller";
import BundleDeals from "../components/BundleDeals";
import TopPicks from "../components/TopPicks";
import BrandsOfWeek from "../components/BrandsOfWeek";
import CategoryItems from "../components/CategoryItems";
import CategoriesGrid from '../components/CategoriesGrid';



{/* Home Promotion Data */ }
import { Sunglasses } from "../common/HomePromotionData";
import { SmartWatches } from '../common/HomePromotionData';
import { Games } from "../common/HomePromotionData";
import { MobilePhones } from '../common/HomePromotionData';
import { Laptops } from '../common/HomePromotionData';
import { GamingPcComponents } from '../common/HomePromotionData';
import { SmartWatchAccessories } from '../common/HomePromotionData';
import { TelevisionAccessories } from "../common/HomePromotionData";
import { Bicycle } from "../common/HomePromotionData";
import { Cookware } from "../common/HomePromotionData";
import { StorageOrganization } from "../common/HomePromotionData";
import { GlasswareDrinkware } from "../common/HomePromotionData";
import { FitnessAccessories } from "../common/HomePromotionData";
import { Perfumes } from "../common/HomePromotionData";
import { FoodPreparationKitchenwares } from "../common/HomePromotionData";
import { TopSellerData } from "../common/ExitingOffersTypeData";
import { BundleDealsData } from "../common/ExitingOffersTypeData";
import { TopPicksData } from "../common/ExitingOffersTypeData";
import { TopPicksBannerData } from "../common/ExitingOffersTypeData";
import { BrandsOfWeekData } from "../common/ExitingOffersTypeData";
import { LaptopsComsData } from "../common/categoryItemsData";
import { HomeEssentialsData } from "../common/categoryItemsData";
import { GamingCompsData } from "../common/categoryItemsData";
import { HealthBeautyData } from "../common/categoryItemsData";
import { BabyMothersData } from "../common/categoryItemsData";
import { EyewareWatchesData } from "../common/categoryItemsData";
import { AutomotiveData } from "../common/categoryItemsData";
import { HomeFurnitureData } from "../common/categoryItemsData";
import { ToolsHardwareData } from "../common/categoryItemsData";




const Home = () => {
  const loadingCategory = useSelector((state) => state.product.loadingCategory);
  const categoryData = useSelector((state) => state.product.allCategory);
  const subCategoryData = useSelector((state) => state.product.allSubCategory);
  const navigate = useNavigate();

  const handleRedirectProductListpage = (id, cat) => {
    if (!id || !cat) return;
    
    const subcategory = subCategoryData?.find((sub) => {
      return sub?.category?.some((c) => c?._id === id);
    });

    if (subcategory) {
      const url = `/${valideURLConvert(cat)}-${id}/${valideURLConvert(
        subcategory.name
      )}-${subcategory._id}`;
      navigate(url);
    }
  };

  const renderCategories = () => {
    if (loadingCategory) {
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-lg h-40"></div>
                <div className="h-4 bg-gray-200 rounded mt-4 mx-auto w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return <CategoriesGrid categories={categoryData} />;
  };

  return (
    <section className="bg-blown-100">
      <CarouselComponents data={HomeCarouselData} />
      <ListsCarousel listData={CategoriesDatas} preferWord={""} />
      <ExitingOffer />
      <div className="mx-auto px-5 lg:pt-10 pt-5 w-full mx-auto first-carousel">
        <div
          className={`w-full h-full min-h-48 mx-auto flex justify-center items-center rounded ${!banner && "animate-pulse"
            } `}
        >
          <img
            src={banner}
            className="w-full h-full lg:block hidden rounded-[10px]"
            alt="banner"
          />
          <img
            src={bannerMobile}
            className="w-full h-full lg:hidden rounded-[10px]"
            alt="banner"
          />
        </div>
      </div>
      <DealOfTheDay />
      <div className="mx-auto px-5 lg:pt-10 pt-5 w-full mx-auto first-carousel">
        <div
          className={`w-full h-full min-h-48 mx-auto flex justify-center items-center rounded ${!banner1 && "animate-pulse my-2"
            } `}
        >
          <img
            src={banner1}
            className="w-full h-full lg:block hidden rounded-[10px]"
            alt="banner"
          />
          <img
            src={bannerMobile1}
            className="w-full h-full lg:hidden rounded-[10px]"
            alt="banner"
          />
        </div>
      </div>
      <PopularProducts type="Mobile Phones" data={MobilePhones} />
      <div className="mx-auto px-5 lg:pt-10 pt-5 w-full mx-auto first-carousel">
        <div
          className={`w-full h-full min-h-48 mx-auto flex justify-center items-center rounded ${!banner2 && "animate-pulse my-2"
            } `}
        >
          <img
            src={banner2}
            className="w-full h-full lg:block hidden rounded-[10px]"
            alt="banner"
          />
          <img
            src={bannerMobile2}
            className="w-full h-full lg:hidden rounded-[10px]"
            alt="banner"
          />
        </div>
      </div>
      <PromotionalBanners />
      <TopSeller data={TopSellerData} />
      <BundleDeals data={BundleDealsData} />
      <div className="mx-auto px-5 lg:pt-10 pt-5 w-full mx-auto first-carousel">
        <div
          className={`w-full h-full min-h-48 mx-auto flex justify-center items-center rounded ${!banner3 && "animate-pulse my-2"
            } `}
        >
          <img
            src={banner3}
            className="w-full h-full lg:block hidden rounded-[10px]"
            alt="banner"
          />
          <img
            src={bannerMobile3}
            className="w-full h-full lg:hidden rounded-[10px]"
            alt="banner"
          />
        </div>
      </div>
      <TopPicks bannerDatas={TopPicksBannerData} topPicksDatas={TopPicksData} />
      <div className="mx-auto px-5 lg:pt-10 pt-5 w-full mx-auto first-carousel">
        <div
          className={`w-full h-full min-h-48 mx-auto flex justify-center items-center rounded ${!banner4 && "animate-pulse my-2"
            } `}
        >
          <img
            src={banner4}
            className="w-full h-full lg:block hidden rounded-[10px]"
            alt="banner"
          />
          <img
            src={bannerMobile4}
            className="w-full h-full lg:hidden rounded-[10px]"
            alt="banner"
          />
        </div>
      </div>
      <BrandsOfWeek data={BrandsOfWeekData} />
      <CategoryItems title="Laptops & Computers" data={LaptopsComsData} />
      <CategoryItems title="Home Essentials" data={HomeEssentialsData} />
      <CategoryItems title="Gaming Components" data={GamingCompsData} />
      <CategoryItems title="Health & Beauty" data={HealthBeautyData} />
      <CategoryItems title="Baby & Mothers" data={BabyMothersData} />
      <CategoryItems title="Eyeware & Watches" data={EyewareWatchesData} />
      <CategoryItems title="Automotive" data={AutomotiveData} />
      <CategoryItems title="Home Furniture" data={HomeFurnitureData} />
      <CategoryItems title="Tools & Hardware" data={ToolsHardwareData} />
      <PopularProducts type="Sunglasses" data={Sunglasses} />
      <PopularProducts type="Games" data={Games} />
      <PopularProducts type="Mobile Phones" data={MobilePhones} />
      <PopularProducts type="Laptops" data={Laptops} />
      <PopularProducts type="Gaming Pc Components" data={GamingPcComponents} />
      <PopularProducts type="Smart Watches" data={SmartWatches} />
      <PopularProducts type="Smart Watch Accessories" data={SmartWatchAccessories} />
      <PopularProducts type="Television Accessories" data={TelevisionAccessories} />
      <PopularProducts type="Bicycle" data={Bicycle} />
      <PopularProducts type="Cookware" data={Cookware} />
      <PopularProducts type="Storage Organization" data={StorageOrganization} />
      <PopularProducts type="Glassware Drinkware" data={GlasswareDrinkware} />
      {renderCategories()}
    </section>
  );
};

export default Home;
