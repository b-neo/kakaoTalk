import React from "react";
import StatusBar from "./statusBar";
import Title from "./title";
import Friends from "./friends";
import Footer from "./footer";

function FriendsTab() {
	return (
		<div id="screen">
			<StatusBar />
			<Title title="Friends" />
			<Friends />
			<Footer />
		</div>
	);
}

export default FriendsTab;
