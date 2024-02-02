import "./FocusTopics.css";

export default function FocusTopics() {
	return (
		<div className="FocusTopics">
			<div className="FocusTopicsHeading">Top 10 Focus Topics</div>
			<div className="FocusTopicData">
				{Array.from({ length: 10 }, (_, index) => (
					<div key={index}>
						<div className="FocusTopicRowWrapper">
							<div className="FocusTopicWrapper">
								<div className="FocusTopicNumber">
									{index + 1}.
								</div>{" "}
								Focus Topic {index + 1}
							</div>
                            <div className="ScoreTab">Score 1</div>
						</div>
					</div>
				))}
			</div>
			<a
				href="/"
				className="FocusTopicsFooter"
			>
				See all <div className="Arrow">&nbsp;{">"}</div>
			</a>
		</div>
	);
}
