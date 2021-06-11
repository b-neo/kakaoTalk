import React from "react";
import { HashRouter, Route } from "react-router-dom";
import FriendsTab from "./friendsTab";
import MsessageTab from "./messageTab";
import Chatroom from "./chatroom";

function App() {
	return (
		<div id="screen">
			<HashRouter>
				<Route path="/" exact={true} component={FriendsTab} />
				<Route path="/messages" exact={true} component={MsessageTab} />
				<Route path="/chat" exact={false} component={Chatroom} />
			</HashRouter>
		</div>
	);
}

export default App;
