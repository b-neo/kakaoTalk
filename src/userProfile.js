/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class User extends React.Component {
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
					<div className="userMusic">
						{this.props.music !== "" ? (
							<span>{this.props.music}</span>
						) : (
							<span hidden />
						)}
					</div>
				</div>
			</>
		);
	}
}
export default User;
