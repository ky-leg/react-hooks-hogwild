import React from "react";
import Nav from "./Nav";
import TileContainer from "./TileContainer";
import Filter from "./Filter"
import HOGS from "../porkers_data";
import { useState } from "react/cjs/react.development";
 

function App() {
	
	const [search, setSearch] = useState("")
	const [greased, setGreased] = useState(false)
	const [minWeight, setMinWeight] = useState(null)
	const [maxWeight, setMaxWeight] = useState(null)

	function onSearch(event){
		setSearch(event.target.value)
	}

	function onGreased(){
		setGreased(!greased)
	}

	function onScale(minWeight, maxWeight){
		setMinWeight(minWeight)
		setMaxWeight(maxWeight)
	}

	const hogs = HOGS.filter((hog) => {
		if (greased){
			return hog.greased === true
		}  
		else {
			return HOGS
		}
	})
		.filter((hog) => hog.name.toUpperCase().includes(search.toUpperCase()))
		.filter((hog) => {
		if (minWeight===null || minWeight===undefined){
			return true
		}
		else {
			return hog.weight >= minWeight && hog.weight<= maxWeight
		}
	})
	
	return (
		<div className="App">
			<Nav />
			<Filter onSearch={onSearch} onGreased={onGreased} onScale={onScale}/>
			<br></br>
			<TileContainer search={search} greased={greased} hogs={hogs}/>
		</div>
	);
}

export default App;
