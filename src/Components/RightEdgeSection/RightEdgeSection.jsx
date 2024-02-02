import AverageScoreSection from "./../AverageScoreSection/AverageScoreSection";
import UserInfo from "../UserInfo/UserInfo";
import "./RightEdgeSection.css";
import FocusTopics from "../FocusTopics/FocusTopics";

export default function RightEdgeSection() {
	return <div className="RightEdgeSection">
        <UserInfo />
        <AverageScoreSection />  
        <FocusTopics />
    </div>;
}
