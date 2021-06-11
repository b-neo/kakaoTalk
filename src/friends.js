/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import User from "./userProfile.js";
import "./style.css";

class Friends extends React.Component {
	render() {
		return (
			<>
				<section id="main">
					<div id="myProfile">
						<div>
							<span className="friendGroup">나의 프로필</span>
							<User
								img="./static/me.jpg"
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
							img="./static/gm.png"
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
							img="./static/dalmi.png"
							name="수지"
							msg="Startup Drama"
							music="Running - 가호"
						/>
						<User
							img="./static/anold.jpg"
							name="스카이넷"
							msg="Where is Jonh Corner"
							music=""
						/>
						<User
							img="./static/neo.jpg"
							name="네오"
							msg="There is NO SPOON"
							music=""
						/>
					</div>
				</section>
			</>
		);
	}
}

export default Friends;
