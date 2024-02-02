import "./AverageScoreSection.css";
import Ring from "./../Ring/Ring";
import { useState } from "react";

export default function AverageScoreSection() {
	const [percentage, setPercentage] = useState(75);
	const changeHandler = (e) => {
		var inpVal = e.target.value;
		if (inpVal >= 100) {
			setPercentage(100);
		} else if (inpVal < 0) {
			setPercentage(0);
		} else {
			setPercentage(inpVal);
		}
	};

    const hoveredOverPercentageRing = () => {
        var storedPercent = percentage
        setPercentage(0);

        setTimeout(() => {
			setPercentage(storedPercent);
		}, 750);

        clearTimeout(hoveredOverPercentageRing);
        ;
    };


	return (
		<div className="AverageScoreSection">
			<span className="AverageScoreHeading">AverageScore</span>
			<div className="AverageRing">
				<div
					className="percentageRing"
					onMouseEnter={hoveredOverPercentageRing}
				>
					<Ring
						Percentage={percentage}
					/>
					<div className="chartPercentage">
						{/* <span>Enter Value</span> */}
						<input
							type="number"
							value={percentage}
							onChange={changeHandler}
						></input>
					</div>
				</div>

				<div className="AverageScoreDescription">
					<span className="PercentageHeading">{percentage}%</span>
					<span className="AboutGraph">About Graph</span>
					<a href="/">
						See Detail <div className="Arrow">&nbsp;{">"}</div>
					</a>
				</div>
			</div>
		</div>
	);
}
