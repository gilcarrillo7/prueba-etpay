import * as React from "react";
import { useTheme } from "styled-components";

const IconEvent = () => {
	const { secondary600 } = useTheme();

	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_5025_312)">
				<path
					d="M18 10H24L21 6L18 10ZM18 14H24L21 18L18 14Z"
					fill={secondary600}
				/>
				<path
					d="M1 0H7V24H1C0.734784 24 0.480429 23.8946 0.292892 23.7071C0.105356 23.5196 0 23.2652 0 23V1C0 0.734784 0.105356 0.480429 0.292892 0.292892C0.480429 0.105356 0.734784 0 1 0Z"
					fill={secondary600}
				/>
				<path
					d="M9 0H15C15.2652 0 15.5196 0.105356 15.7071 0.292892C15.8946 0.480429 16 0.734784 16 1V23C16 23.2652 15.8946 23.5196 15.7071 23.7071C15.5196 23.8946 15.2652 24 15 24H9V0Z"
					fill={secondary600}
				/>
			</g>
			<defs>
				<clipPath id="clip0_5025_312">
					<rect width="24" height="24" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export default IconEvent;
