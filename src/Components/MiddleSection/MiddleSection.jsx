import DataFlow from "../DataFlow/DataFlow";
import RefinedNews from "../RefinedNews/RefinedNews";
import SearchBar from "../SearchBar/SearchBar";
import "./MiddleSection.css" ;

export default function MiddleSection() {
  return (
		<div className="MiddleSection">
			<SearchBar />
			<div className="CurrentLicence">
				<span>Current Licence: </span>&nbsp;&nbsp;&nbsp; USD/CAD &nbsp;
				AUD/USD
			</div>
            <DataFlow />
            <RefinedNews />
		</div>
  );
}
