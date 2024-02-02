import "./RefinedNews.css";

export default function RefinedNews() {
	const RefinedNewsData = [
		{
			color: "#FFCF3F",
			type: "ERU",
			news: "The Euro has steadied sgsinst the US Dolllar on Thusdat as the market pondersthe path of Fed rate hikes",
			score: "+1",
			impact: "Neutral",
			probability: "High",
		},
		{
			color: "#16A8FC",
			type: "INR",
			news: "The Euro has steadied sgsinst the US Dolllar on Thusdat as the market pondersthe path of Fed rate hikes",
			score: "+1",
			impact: "High",
			probability: "High",
		},
		{
			color: "#B6312F",
			type: "CAD",
			news: "The Euro has steadied sgsinst the US Dolllar on Thusdat as the market pondersthe path of Fed rate hikes",
			score: "+1",
			impact: "Medium",
			probability: "High",
		},
		{
			color: "#B6312F",
			type: "CAD",
			news: "The Euro has steadied sgsinst the US Dolllar on Thusdat as the market pondersthe path of Fed rate hikes",
			score: "+1",
			impact: "Low",
			probability: "High",
		},
		{
			color: "#4ECD70",
			type: "OIL",
			news: "The Euro has steadied sgsinst the US Dolllar on Thusdat as the market pondersthe path of Fed rate hikes",
			score: "+1",
			impact: "Low",
			probability: "Neutral",
		},
	];
	return (
		<div className="RefinedNews">
			<div className="Heading">Refined News & Data Flow</div>
			<div className="TableHeadings">
				<span className=" Type">Type</span>
				<div className=" News">News</div>
				<div className=" Score">Score</div>
				<div className=" Impact">Impact</div>
				<div className=" Probability">Probability</div>
			</div>
			{RefinedNewsData.map((data, index) => {
				return (
					<div
						className="TableRow"
						key={index}
					>
						<span className=" Type">
							<div
								className="ColorIcon"
								style={{ backgroundColor: data.color }}
							></div>
							{data.type}
						</span>
						<span className=" News">{data.news}</span>
						<span className=" Score">{data.score}</span>
						<span className=" Impact">{data.impact}</span>
						<span className=" Probability">
							<div className="ProbabilityIcon">{data.probability}</div>
						</span>
					</div>
				);
			})}
		</div>
	);
}
