
export const PopAnimStyle = (position: string) =>
	`opacity: 1;

transform: scale(1);
animation: popout;
transform-origin: top ${position};
animation-duration: 0.4s;
animation-timing-function: ease-out;
@keyframes popout {
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
}`;
