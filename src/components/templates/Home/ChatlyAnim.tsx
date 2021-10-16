import { ChatlyStyle } from "./styles"

export const Chatly = () => {
	return <ChatlyStyle className="container">
		<div id="chatbot">
			<div className="dot"></div>
			<div className="dot"></div>
			<div className="dot"></div>
		</div>
		<div id="chatbot-corner"></div>
		<div id="antenna">
			<div id="beam"></div>
			<div id="beam-pulsar"></div>
		</div>
	</ChatlyStyle>
}