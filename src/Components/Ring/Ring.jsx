import "./Ring.css";

export default function Ring(props) {  
        
    
	return (
		<div className="Ring">
			<svg
				viewBox="0 0 100 100"
				width="200"
				height="200"
			>
				<circle
					cx="50"
					cy="50"
					r="30"
					fill="#FFFFFF"
					strokeWidth="4"
					stroke="lightgray"
					className="circleCircumference"
				/>
				<circle
					cx="50"
					cy="50"
					r="30"
					fill="none"
					strokeWidth="4"
					stroke="lightgray"
					style={{ "--percentage": props.Percentage }}
					className="circleCircumferenceFilled"
							
					
				/>
			</svg>
		</div>
	);
}
