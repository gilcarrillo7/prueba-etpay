import * as React from "react";
import { useTheme } from "styled-components";

const IconOrganiser = () => {
	const { primary600 } = useTheme();

	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 9H1C0.734784 9 0.480429 8.89464 0.292892 8.70711C0.105356 8.51957 0 8.26522 0 8V1C0 0.734784 0.105356 0.480429 0.292892 0.292892C0.480429 0.105356 0.734784 0 1 0H8C8.26522 0 8.51957 0.105356 8.70711 0.292892C8.89464 0.480429 9 0.734784 9 1V8C9 8.26522 8.89464 8.51957 8.70711 8.70711C8.51957 8.89464 8.26522 9 8 9Z"
				fill={primary600}
			/>
			<path
				d="M8 22H1C0.734784 22 0.480429 21.8946 0.292892 21.7071C0.105356 21.5196 0 21.2652 0 21V14C0 13.7348 0.105356 13.4804 0.292892 13.2929C0.480429 13.1054 0.734784 13 1 13H8C8.26522 13 8.51957 13.1054 8.70711 13.2929C8.89464 13.4804 9 13.7348 9 14V21C9 21.2652 8.89464 21.5196 8.70711 21.7071C8.51957 21.8946 8.26522 22 8 22Z"
				fill={primary600}
			/>
			<path d="M12 1H22V3H12V1Z" fill={primary600} />
			<path d="M22 14H12V16H22V14Z" fill={primary600} />
			<path d="M22 19H12V21H22V19Z" fill={primary600} />
			<path d="M22 6H12V8H22V6Z" fill={primary600} />
		</svg>
	);
};

export default IconOrganiser;
