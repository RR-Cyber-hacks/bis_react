import React from "react";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "../components/practiceList";

export const Loop = () => {
    return (
        <ul>
            {seriesData.map((curElem) =>{
                return(
                    <SeriesCard key={curElem.id} data = {curElem}/>
                )
            })}
        </ul>
    );
}



{/* <React.Fragment>
<ul>
    {seriesData.map((curlElem)=>{
        return (
        <li key={curlElem.id}>
        <div>
            <img src={curlElem.img_url} alt="1.jpg" width="40%" height="40%"/>
        </div>
        <h2>Title: {curlElem.name}</h2>
        <h1>Rating: {curlElem.rating}</h1>
        <h3>Description: {curlElem.description}</h3>
        <a href={curlElem["watch _url"]}>
            <button>Watch Now</button>
        </a>
        </li>
        )
    })}
    </ul>
    
</React.Fragment> */}