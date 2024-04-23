import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { mainCarouselData } from "../../components/HomeCarousel/MainCarouselData";
import { sareePage1 } from "../../../Data/page1";
import { mensShoesPage1 } from "../../../Data/shoes";

const HomePage = () => {
    return (
        <div>
            <MainCarousel images={mainCarouselData}/>

            <div className='space-y-10 py-20 flex flex-col '>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={mensShoesPage1} section={"Men's Shoes"} />
                <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarousel data={sareePage1} section={"Saree"}  />
            </div>
        </div>

    )
}

export default HomePage;