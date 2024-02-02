import "./UserInfo.css";
import NotificationBellIcon from "./../../assets/Icons/NotificationBell_Icon.png" ;
import userImage from "./../../assets/userImage.jpg" ;
import ArrowIcon from "./../../assets/Icons/arrow_Down.png" ;

export default function UserInfo() {
  return (
		<div className="UserInfo">
			<div className="userOptionsWrapper">
				<div className="NotificationIconWrapper">
					<span className="Notificationcount">2</span>
					<img
						src={NotificationBellIcon}
						alt=""
						className="NotificationBellIcon"
					/>
				</div>
				<div className="UserDetails">
					<img
						src={userImage}
						alt="userPic"
						className="UserImage"
					/>
					<p className="userName">UserName</p>
					<img
						src={ArrowIcon}
						alt=""
						className="ArrowIcon"
					/>
					<span className="OnlineIcon"></span>
				</div>
			</div>

			<div className="userGreetingWrapper">
				<span >Welcome, UserName </span>
				<span >Good to see you again!</span>
				
			</div>
		</div>
  );
}
