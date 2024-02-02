import { useState } from "react";
import "./DataFlow.css";

import FilterIcon from "./../../assets/Icons/FilterIcon_White.png";
import ArrowDownIcon from "./../../assets/Icons/arrow_Down_White.png";
import DataFlowMap from "../DataFlowMap/DataFlowMap";

export default function DataFlow() {
	const timeIntervalOptions = ["5M", "15M", "30M", "1H", "2H", "4H", "All"];
	const [selected, setselected] = useState("5M");
	const selectHandler = (e) => {
		setselected(e.target.innerHTML);
	};
	return (
		<div className="DataFlow">
			<div className="DataFlowHeader">
				<div className="DataFlowMainHeading">News & DataFlow</div>
				<div className="DataFlowOptions">
					<div className="DataFlowTimeIntervals">
						{timeIntervalOptions.map((timeInterval, index) => (
							<div
								key={index}
								onClick={selectHandler}
								className={
									selected === timeInterval
										? "DataFlowTimeIntervalSpan Active"
										: "DataFlowTimeIntervalSpan"
								}
							>
								{timeInterval}
							</div>
						))}
					</div>

					<span className="DataFlowFilter">
						<img
							src={FilterIcon}
							alt="Filter"
						/>
						Filters
						<img
							src={ArrowDownIcon}
							alt="ArrowDown"
						/>
					</span>
				</div>
			</div>
			<DataFlowMap />
		</div>
	);
}
