import React from "react";
import StatusBar from "./statusBar";
import Title from "./title";
import Footer from "./footer";
import Messages from "./messages";

class MsessageTab extends React.Component {
	render() {
		return (
			<>
				<div id="screen">
					<StatusBar />
					<Title title="Messages" />
					<Messages />
					<Footer />
				</div>
			</>
		);
	}
}

export default MsessageTab;
