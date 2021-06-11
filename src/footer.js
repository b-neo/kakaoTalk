/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<>
				<section id="footer">
					<div className="menu">
						<Link
							to={{
								pathname: "/",
								state: {},
							}}
						>
							<img src="./static/person.png" />
						</Link>
						<Link
							to={{
								pathname: "/messages",
								state: {},
							}}
						>
							<img src="./static/message.png" />
						</Link>
						<img src="./static/hash.png" />
						<img src="./static/more.png" />
					</div>
				</section>
			</>
		);
	}
}

export default Footer;
