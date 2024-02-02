import "./DataFlowMap.css";

export default function DataFlowMap() {
	const DataFlowGraphX = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
	const DataFlowGraphY = [ 0,10,20,30,40,50,60,70,80,90,100] ;
	return (
		<div className="DataFlowMap">
			<div className="DataFlowMapWrapper">
				<div className="Values">
					{DataFlowGraphX.map((Value_X) => (
						<div className="DataFlowGraphXValue">{Value_X}</div>
					))}
				</div>
				<div className="DataFlowGraph"></div>
				<div className="DataFlowTimeValues">
					{DataFlowGraphY.map((Value_Y) => (
						<div className="DataFlowGraphXValue">{Value_X}</div>
					))}
				</div>
			</div>
		</div>
	);
}
