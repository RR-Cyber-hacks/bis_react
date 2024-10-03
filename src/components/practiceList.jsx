import React from "react";
export const SeriesCard = ({data}) => {
    return (
        <React.Fragment>
            <li>
                <div>
                    <img src={data.img_url} alt="img" width="40%" height="40%" />
                </div>
                <h2>Title: {data.name}</h2>
                <h1>Rating: {data.rating}</h1>
                <h3>Description: {data.description}</h3>
                <a href={data.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </li>

        </React.Fragment>
    );
}




    // const { id, img_url, name, rating, description, watch_url } =
    //     data;