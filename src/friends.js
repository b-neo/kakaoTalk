/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import User from "./userProfile.js";
import "./style.css";

import meImg from "./static/me.jpg";
import gmImg from "./static/gm.png";
import dalmi from "./static/dalmi.png";
import anold from "./static/anold.jpg";
import neo from "./static/neo.jpg";

class Friends extends React.Component {
	render() {
		return (
			<>
				<section id="main">
					<div id="myProfile">
						<div>
							<span className="friendGroup">나의 프로필</span>
							<User
								img={meImg}
								name="김남빈"
								msg="Code has never bother me anyway"
								music="빨간 맛 - red velvet"
							/>
						</div>
					</div>
					<div id="plusFriend">
						<div>
							<span className="friendGroup">플러스 친구</span>
						</div>
						<User
							img={gmImg}
							name="Nexon"
							msg="2021 여름 이벤트에 참여하세요!"
							music=""
						/>
					</div>
					<div id="friends">
						<div>
							<span className="friendGroup">친구</span>
						</div>
						<User
							img={dalmi}
							name="수지"
							msg="Startup Drama"
							music="Running - 가호"
						/>
						<User
							img={anold}
							name="스카이넷"
							msg="Where is Jonh Corner"
							music=""
						/>
						<User img={neo} name="네오" msg="There is NO SPOON" music="" />
					</div>
				</section>
			</>
		);
	}
}

export default Friends;
