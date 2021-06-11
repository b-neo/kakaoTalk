/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";

import personImg from "./static/person.png";
import messageImg from "./static/message.png";
import hashImg from "./static/hash.png";
import moreImg from "./static/more.png";

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
							<img src={personImg} />
						</Link>
						<Link
							to={{
								pathname: "/messages",
								state: {},
							}}
						>
							<img src={messageImg} />
						</Link>
						<img src={hashImg} />
						<img src={moreImg} />
					</div>
				</section>
			</>
		);
	}
}

export default Footer;
