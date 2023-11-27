import React,{useEffect, useState} from "react";
import Header from "./Header";
import RecipeAssembler from "./RecipeAssembler";
import '../css/slider.css';
import HomeSlider from "./HomeSlider";

export default function Home({type, btnEvent, recipes}){
    return(
        <>
            <Header loginBtn={type} btnEvent={btnEvent}/>
            <HomeSlider recipes={recipes}/>
        </>
    )
}