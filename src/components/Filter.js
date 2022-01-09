import React from "react";

function Filter({onSearch, onGreased, onScale}){

    function handleSearch(event){
        onSearch(event)
    }

    function handleGreased(event){
        onGreased(event)
    }

    function handleScale(event){
        
        const range = event.target.value
        // console.log(range.slice(range.length -1, range.length))
        const minWeight = parseInt(range.slice(0,1))
        const maxWeight = parseInt(range.slice(range.length -1, range.length))
        // console.log(maxWeight, typeof maxWeight)
        onScale(minWeight, maxWeight)
    }

    return (
    <div className="Filter">
      <input 
        onChange= {handleSearch}
        type="text" 
        name="search" 
        placeholder="Search..." 
      />
      <p>   </p>
      <input 
      type="checkbox" 
      onChange={handleGreased}
      id = "greased"/>
      <label htmlFor="greased"> Show Me Greasers!</label>
      <p>   </p>
      <select 
      name="filter" 
      onChange={handleScale}
      id="weight">
        <option value="All">-</option> 
        <option value="0, 2">0 - 2 Ton</option>
        <option value="2, 4">2 - 4 Ton</option>
        <option value="4, 6">4 - 6 Ton</option>
      </select>
      <label htmlFor="weight"> Put 'em on the Scale!</label>
    </div>
    )
}

export default Filter 