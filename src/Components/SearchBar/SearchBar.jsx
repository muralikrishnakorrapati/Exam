import { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "./../../assets/Icons/SearchIcon.png" ;
import MicIcon from "./../../assets/Icons/MicIcon_Active.png" ;

export default function SearchBar() {
    const [searchText , setSearchText] = useState("") ;
    const changeHandler = (e) => {
        setSearchText(e.target.value) ;
    } ;
	return (
		<div className="SearchBar">
            <img src={SearchIcon} alt="Search Icon" className="SearchIcon" />
			<input
				type="text"
				placeholder="Search your question here or ask Tiia"
				value={searchText}
				onChange={changeHandler}
                onKeyDown={ (e) => (e.key === "Enter") ? setSearchText("") : setSearchText(e.target.value) }
			></input>
            <img src={MicIcon} alt="Mic Icon" className="MicIcon" />
        
        </div>

		
	);
}
