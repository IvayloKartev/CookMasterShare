import React from "react";
import Header from "./Header";

export default function Home({type, btnEvent}){
    return(
        <>
            <Header loginBtn={type} btnEvent={btnEvent}/>
        </>
    )
}