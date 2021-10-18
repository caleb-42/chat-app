import { Box } from "@chakra-ui/layout";
import styled from "@emotion/styled";

export const ChatStyle = styled(Box)`
	&.rate{
		.stars span{
			margin: 0 .8rem
		}
	}
	&.marker {
		.pin {
			width: 30px;
			height: 30px;
			border-radius: 50% 50% 50% 0;
			background: #db1d1b;
			position: absolute;
			transform: rotate(-45deg);
			left: 50%;
			top: 50%;
			margin: -20px 0 0 -20px;
		}
		.pin:after {
			content: "";
			width: 14px;
			height: 14px;
			top: 27%;
			left: 25%;
			background: #701010;
			position: absolute;
			border-radius: 50%;
		}
		
		.pulse {
			background: #db1d1b;
			border-radius: 50%;
			height: 14px;
			width: 14px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin: 11px 0px 0px -12px;
			transform: rotateX(55deg);
			z-index: -2;
		}
		.pulse:after {
			content: "";
			border-radius: 50%;
			height: 40px;
			width: 40px;
			position: absolute;
			margin: -10px 0 0 -20px;
			animation: pulsate 1s ease-out;
			animation-iteration-count: infinite;
			opacity: 0;
			box-shadow: 0 0 1px 2px #eb504e;
			animation-delay: 1.1s;
		}
		
		@keyframes pulsate {
			0% {
				transform: scale(0.1, 0.1);
				opacity: 0;
			}
		
			50% {
				opacity: 1;
			}
		
			100% {
				transform: scale(1.2, 1.2);
				opacity: 0;
			}
		}
		
		@keyframes bounce {
			0% {
				opacity: 0;
				transform: translateY(-2000px) rotate(-45deg);
			}
		
			60% {
				opacity: 1;
				transform: translateY(30px) rotate(-45deg);
			}
		
			80% {
				transform: translateY(-10px) rotate(-45deg);
			}
		
			100% {
				transform: translateY(0) rotate(-45deg);
			}
		}
		
	}
`