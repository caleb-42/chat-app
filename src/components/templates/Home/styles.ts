import { Box } from "@chakra-ui/layout";
import styled from "@emotion/styled";

const centered = `
	margin: auto;
	position: absolute;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
`

export const ChatlyStyle = styled(Box)`
&{
		&.container {
			${centered}
			height: 500px;
			width: 100%;
			animation: up-down 7.5s infinite ease-in-out;
			
			#chatbot {
				${centered}
				width: 200px;
				height: 105px;
				border: 12px solid ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
				border-radius: 5rem;
			}
			
			#chatbot-corner {
				${centered}
				top: 105px;
				left: -65px;
				width: 0;
				height: 0;
				border-left: 20px solid transparent;
				border-right: 20px solid transparent;
				border-top: 25px solid ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
				transform: rotate(140deg);
			}
			
			#antenna {
				${centered}
				top: -125px;
				height: 20px;
				width: 10px;
				background-color: ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
				animation: antenna-appear 7.5s infinite ease-in-out;
				
				#beam {
					position: absolute;
					top: -12.5px;
					left: -5px;
					height: 20px;
					width: 20px;
					border-radius: 50%;
					background-color: ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
					animation: beam-appear 7.5s infinite ease-in-out;
				}
				
				#beam-pulsar {
					position: absolute;
					top: -12.5px;
					left: -5px;
					height: 20px;
					width: 20px;
					border-radius: 50%;
					background-color: ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
					animation: beam-pulsar-appear 7.5s infinite ease-in-out;
				}
			}
			
			.dot {
				height: 17.5px;
				width: 17.5px;
				${centered}
				left: -65px;
				background-color: ${({theme}) => (theme as any).colors.primaryColor.highlightInset};
				border-radius: 50%;
				animation: pulse-outer 7.5s infinite ease-in-out;
			}

			.dot:nth-child(2) {
				left: 0;
				animation: pulse-inner 7.5s infinite ease-in-out;
				animation-delay: 0.2s;
			}

			.dot:nth-child(3) {
				left: 65px;
				animation: pulse-outer 7.5s infinite ease-in-out;
				animation-delay: 0.4s;
			}
			
			@keyframes pulse-inner {
				0% { transform: scale(1); }
				7.5% { transform: scale(1.5); }
				15% { transform: scale(1); }
				22.5% { transform: scale(1.5); }
				30% { transform: scale(1); }
				37.5% { transform: scale(1.5); }
				45% {
					top: 0;
					transform: scale(1); 
					height: 17.5px; 
					border-bottom-left-radius: 50%;
					border-bottom-right-radius: 50%;
					transform: rotate(-370deg);
				}
				50% {
					top: 22.5px;
					height: 10px;
					border-top-left-radius: 50%;
					border-top-right-radius: 50%;
					border-bottom-left-radius: 3rem;
					border-bottom-right-radius: 3rem;
					transform: rotate(10deg);
				}
				55% { transform: rotate(-10deg); }
				60% { transform: rotate(10deg); }
				65% { transform: rotate(-10deg); }
				65% { transform: rotate(0deg); }
				85% {
					top: 22.5px;
					height: 10px;
					border-top-left-radius: 50%;
					border-top-right-radius: 50%;
					border-bottom-left-radius: 3rem;
					border-bottom-right-radius: 3rem;
					transform: rotate(0deg); 
				}
				92.5% {
					top: 22.5px;
					height: 10px;
					border-top-left-radius: 50%;
					border-top-right-radius: 50%;
					border-bottom-left-radius: 2.5rem;
					border-bottom-right-radius: 2.5rem;
					transform: rotate(0deg); 
				}
				100% {
					top: 0;
					height: 17.5px;
					border-radius: 50%;
					transform: rotate(-360deg);
				}
			}
			
			@keyframes pulse-outer {
				0% { transform: scale(1); }
				7.5% { transform: scale(1.5); }
				15% { transform: scale(1); }
				22.5% { transform: scale(1.5); }
				30% { transform: scale(1); }
				37.5% { transform: scale(1.5); }
				45% { transform: scale(1); height: 17.5px; }
				55% { tranform: scale(1); height: 5px; }
				60% { height: 17.5px; }
				75% { height: 17.5px; }
				80% { tranform: scale(1); height: 5px; }
				85% { height: 17.5px; }
				100% { height: 17.5px; }
			}
			
			@keyframes antenna-appear {
				0% { visibility: hidden; top: -100px; height: 0 }
				50% { visibility: hidden; top: -100px; height: 0 }
				55% { visibility: visible; top: -125px; height: 20px; }
				95% { visibility: visible; top: -125px; height: 20px; }
				100% { top: -100px; height: 0; }
			}
			
			@keyframes beam-appear {
				0% { visibility: hidden; top: -12.5px; height: 0 }
				50% { visibility: hidden; top: -12.5px; height: 0 }
				55% { visibility: visible; top: -12.5px; height: 20px; width: 20px; }
				100% { visibility: visible; top: -12.5px; height: 20px; width: 20px; }
			}
			
			@keyframes beam-pulsar-appear {
				0% { visibility: hidden; top: -12.5px; height: 0 }
				50% { visibility: hidden; top: -12.5px; height: 0 }
				55% { visibility: visible; top: -12.5px; left: -5px; height: 20px; width: 20px; opacity: 1 }
				65% { top: -25px; left: -15px; height: 40px; width: 40px; opacity: 0; visibility: visible; }
				74% { visibility: hidden; opacity: 0; }
				75% { visibility: visible; top: -12.5px; left: -5px; height: 20px; width: 20px; opacity: 1 }
				85% { top: -25px; left: -15px; height: 40px; width: 40px; opacity: 0; visibility: visible; }
				94% { visibility: hidden; opacity: 0; }
				100% { visibility: hidden; opacity: 0; }
			}
			
			@keyframes up-down {
				0% { transform: translate(0); }
				12.5% { transform: translate(0, 2%); }
				25% { transform: translate(0);  }
				37.5% { transform: translate(0, 2%); }
				50% { transform: translate(0); }
				62.5% { transform: translate(0, 2%); }
				75% { transform: translate(0); }
				87.5% { transform: translate(0, 2%); }
				100% { transform: translate(0); }
			}
		}
	}
`