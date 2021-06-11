/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Chat extends React.Component {
	render() {
		const { m } = this.props;
		return (
			<div>
				{console.log(m[0].message)}
				<span></span>
			</div>
		);
	}
}

export default Chat;
