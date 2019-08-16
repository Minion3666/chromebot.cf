import React, { Component } from 'react';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: "#c23b3b",
			barColor: "grey",
			percentage: 100,
			message: "Detecting the online bots...",
			xmlhttp: new XMLHttpRequest(),
			timeoutId: null
		};
	}
	componentDidMount() {
		this.state.xmlhttp.onreadystatechange = () => {
			if (
				this.state.xmlhttp.readyState == 4 &&
				this.state.xmlhttp.status == 200
			) {
				let onlineMembers = 0;
				JSON.parse(pbDiscordWidget.responseText).members.forEach((member) => {
					if (this.props.searchForMembers.indexOf(member.id) >= 0) {
						onlineMembers++;
					}
					let percentage = (onlineMembers / searchForMembers.length) * 100;
					if (percentage == 100) {
						this.setState({percentage: percentage, barColor: "#6cb83a", color: "#6cb83a", message: percentage.toString() + "% of the bot is online"});
					} else {
						this.setState({percentage: percentage, barColor: "#6cb83a", color: "#c23b3b", message: percentage.toString() + "% of the bot is online"});
					}
				});
				setTimeout(() => {
					this.state.xmlhttp.open(
						"GET",
						"https://discordapp.com/api/guilds/" +
							this.props.serverId +
							"/widget.json?timestamp=" +
							new Date().getTime(),
						true
					); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
					this.state.xmlhttp.send();
				}, 5000);
			}
		};
		this.state.xmlhttp.open(
			"GET",
			"https://discordapp.com/api/guilds/" +
				this.props.serverId +
				"/widget.json?timestamp=" +
				new Date().getTime(),
			true
		); //we append the current timestamp to bypass caching, it's hacky but it works. Please don't remove it unless you have a better solution.
		this.state.xmlhttp.send();
	}
	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
		this.xmlhttp.abort();
	}
	render() {
		return (
			<div id="percentbarOuter">
				<div id="percentbarInnerText">Detecting the online bots...</div>
				<div id="percentbarInner"></div>
			</div>
		);
	}
}

export default Button;
