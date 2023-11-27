import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function RecipeCard({type, link}){
    if(type === "none"){
        return (
            <div className="recipecard bg-dark">
                <h4 className="text-light">Add new recipe</h4>
                <a href={link} class="addrecipe"><i class="fa-solid fa-plus addrecipe-icon"></i></a>
            </div>
        )
    }
}