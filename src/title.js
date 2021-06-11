/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class Title extends React.Component {
	render() {
		return (
			<>
				<section id="title">
					<div>
						<span>{this.props.title}</span>
					</div>
					<div>
						<img src="./static/search.png" />
						<img src="./static/setting.png" />
					</div>
				</section>
			</>
		);
	}
}

export default Title;
