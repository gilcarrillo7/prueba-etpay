import * as React from "react";
import { useTheme } from "styled-components";

const IconCalendar = () => {
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
				d="M22 5V1C22 0.734784 21.8946 0.480429 21.7071 0.292892C21.5196 0.105356 21.2652 0 21 0H1C0.734784 0 0.480429 0.105356 0.292892 0.292892C0.105356 0.480429 0 0.734784 0 1V5H22Z"
				fill={primary600}
			/>
			<path
				d="M0 7V21C0 21.2652 0.105356 21.5196 0.292892 21.7071C0.480429 21.8946 0.734784 22 1 22H6V7H0Z"
				fill={primary600}
			/>
			<path
				d="M8 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V7H8V22Z"
				fill={primary600}
			/>
		</svg>
	);
};

export default IconCalendar;
