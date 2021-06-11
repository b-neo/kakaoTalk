/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Message from "./message";
import { Link } from "react-router-dom";

class Friends extends React.Component {
	render() {
		return (
			<>
				<section id="main">
					<Link
						to={{
							pathname: "/chat/1",
							state: { name: "서달미" },
						}}
					>
						<Message
							id="1"
							img="./static/dalmi.png"
							name="서달미"
							msg="안녕? 뭐해?"
							arrivedTime="오후 8:24"
						/>
					</Link>
				</section>
			</>
		);
	}
}

export default Friends;
