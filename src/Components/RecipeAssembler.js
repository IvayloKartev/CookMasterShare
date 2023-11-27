import React, {useState} from "react";
import '../css/slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RecipeAssembler({photo, title, content, type}){

    if(type === "active"){
        return (
            <div className="card active-card" id="card2">
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        )
    }
    if(type === "unactive"){
        return (
            <div className="card unactive-card" id="card1">
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        )
    }
    if(type === "unactive-left"){
        return (
            <div className="card unactive-card" id="card3">
                <div className="card-body">
                    <img className="card-img" src={photo}/>
                    <h1 className="card-title">{title}</h1>
                    <p className="card-text">{content}</p>
                </div>
            </div>
        )
    }
}