/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Message extends React.Component {
	render() {
		return (
			<>
				<div className="user">
					<div>
						<img src={this.props.img} />
					</div>
					<div className="userInfo">
						<span className="userName">{this.props.name}</span>
						<span className="userMessage">{this.props.msg}</span>
					</div>
					<div className="arrivedTime">{this.props.arrivedTime}</div>
				</div>
			</>
		);
	}
}
export default Message;
