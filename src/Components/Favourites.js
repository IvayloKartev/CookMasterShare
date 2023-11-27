import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from "./RecipeCard";
import '../App.css';

export default function Favourites({cards}){
    if(cards === null){
        return (
            <section id="favorites">
                <h1 className="text-white">Favourites</h1>
                <div className='hr'></div>
                <RecipeCard type="none" link="#"/>
            </section>
        )
    }
}