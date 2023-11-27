import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from "./RecipeCard";
import '../App.css';

export default function MyRecipes({cards}){
    if(cards === null){
        return (
            <section id="myrecipes">
                <h1 className="text-white">My recipes</h1>
                <div className='hr'></div>
                <RecipeCard type="none" link="#createrecipe"/>
            </section>
        )
    }
}