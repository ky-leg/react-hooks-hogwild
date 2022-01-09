import React, {useState} from "react";

function Tile({name, specialty, greased, weight, medal, image}){
    // console.log(greased)
    const [details, setDetails] = useState(false)

    function showDetails(){
        setDetails(!details)
    }

    return(
        <div onClick={showDetails} className="pigTile card" >
            <img src={image} alt=""/>
            <h3 className="header pigTile h3">{name}</h3>
            <div style={{display: details ? "block":"none"}}>
                <p className="hoggyText">Specialty: {specialty}</p>
                <p className="hoggyText">Greased: {greased?"HYB":"Miss Me With That Nasty"}</p>
                <p className="hoggyText">Weight: {weight}</p>
                <p className="hoggyText">Medal: {medal}</p>                
            </div>
        </div>
    )
}


// Name: 
// Specialty: {specialty}
// Greased: {greased}
// Weight: {weight}
// Medal: {medal}
// Image: {image}

export default Tile

