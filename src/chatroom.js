/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Chat from "./chat";
import StatusBar from "./statusBar";
import Title from "./title";
import Footer from "./footer";

class Friends extends React.Component {
	state = {
		dalmi: [
			{
				message: "뭐해?",
				time: "오전 01:23",
			},
		],
	};
	render() {
		const { name } = this.props.history.location.state;
		const { dalmi } = this.state;
		return (
			<>
				<StatusBar />
				<Title title={name} />
				<section id="main">
					<Chat m={dalmi} />
				</section>
				<Footer />
			</>
		);
	}
}

export default Friends;
