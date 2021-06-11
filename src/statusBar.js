/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class StatusBar extends React.Component {
	render() {
		return (
			<>
				<section id="top">
					<div>
						<span>10:23</span>
					</div>
					<div id="statusIcon">
						<img className="statusImg" src="./static/dial.png" />
						<img className="statusImg" src="./static/mute.png" />
						<img className="statusImg" src="./static/wifi.png" />
						<div>
							<span>93%</span>
						</div>
						<img className="statusImg" src="./static/battery.png" />
					</div>
				</section>
			</>
		);
	}
}

export default StatusBar;
