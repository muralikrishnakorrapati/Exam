import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

import NewsIcon from "./../../assets/Icons/NewsIcon.png" ;
import NewsIconActive from "./../../assets/Icons/NewsIcon_Active.png" ;

import RealEconomicIndicatorsIcon from "./../../assets/Icons/RealEconomicIndicatorsIcon.png";
import RealEconomicIndicatorsIconActive from "./../../assets/Icons/RealEconomicIndicatorsIcon_Active.png";

import ScoreIcon from "./../../assets/Icons/ScoreIcon.png" ;
import ScoreIconActive from "./../../assets/Icons/ScoreIcon_Active.png" ;

import CustomerSupportIcon from "./../../assets/Icons/CustomerSupportIcon.png" ;
import CustomerSupportIconActive from "./../../assets/Icons/CustomerSupportIcon_Active.png" ;

import NotificationBellIcon from "./../../assets/Icons/NotificationBell_Icon.png" ;
import NotificationBellIconActive from "./../../assets/Icons/NotificationBell_Icon_Active.png" ;

import Logo from "./../../assets/logo.png";


export const Navigation = () => {
	const NavigationData = [
		{ to: "/", name: "News Quant",  icon : NewsIcon , iconActive : NewsIconActive  },
		{ to: "/RealEconomicIndicators", name: "Real Economic Indicators" , icon : RealEconomicIndicatorsIcon , iconActive : RealEconomicIndicatorsIconActive},
		{ to: "/OneScore", name: "One Score", icon : ScoreIcon , iconActive : ScoreIconActive},
		{ to: "/AlertCentral", name: "Alert Central" , icon : NotificationBellIcon , iconActive : NotificationBellIconActive},
		{ to: "/CustomerSupport", name: "Customer Support" , icon : CustomerSupportIcon , iconActive : CustomerSupportIconActive},
	];

	const Location = useLocation();
	return (
		<div className="Navigation">
			<img
				src={Logo}
				alt="Logo"
				className="Logo"
			/>
			<p className="MainMenuHeading">MAIN MENU</p>
			<div className="NavLinks">
				{NavigationData.map((item, index) => {
					return (
						<Link
							to={item.to}
							className={
								Location.pathname === item.to
									? "NavLink Active"
									: "NavLink"
							}
							key={index}
						>
							<div className="NavLinkIconWrapper">
								<img
									src={
										Location.pathname === item.to
											? item.iconActive
											: item.icon
									}
									alt={item.name}
									className="NavLinkIcon"
								/>
							</div>

							{item.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
