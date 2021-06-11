/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import searchImg from "./static/search.png";
import settingImg from "./static/setting.png";

class Title extends React.Component {
	render() {
		return (
			<>
				<section id="title">
					<div>
						<span>{this.props.title}</span>
					</div>
					<div>
						<img src={searchImg} />
						<img src={settingImg} />
					</div>
				</section>
			</>
		);
	}
}

export default Title;
