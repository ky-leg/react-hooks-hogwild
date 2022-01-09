import React from "react";
import Tile from "./Tile";


function TileContainer({hogs}){
    const tiles = hogs.map((hog) =>{
        return (
            <Tile 
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medal={hog.medal}
            image={hog.image}/>
        )
    })

    return (
        <div className="ui grid container link cards">
            {tiles}
        </div>
    )
}

export default TileContainer
