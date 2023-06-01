import React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface IProps {
	color?: "white" | "neutral";
	size?: "xl" | "lg" | "base";
	children: React.ReactNode;
}

const StyledTitle = styled.h1<{
	size: "xl" | "lg" | "base";
	color: "white" | "neutral";
	view: boolean;
}>`
	color: ${({ theme, color }) =>
		color === "neutral" ? theme.neutral900 : theme.white};
	font-size: ${({ size }) =>
		size === "xl" ? "36px" : size === "lg" ? "36px" : "20px"};
	line-height: ${({ size }) =>
		size === "xl" ? "48px" : size === "lg" ? "48px" : "28px"};
	font-weight: 600;
	margin: 1rem 0;
	transition: transform 0.5s ease-in-out;
	transform: ${({ view }) => (view ? "translateY(0)" : "translateY(5rem)")};
	@media (min-width: 500px) {
		font-size: ${({ size }) =>
			size === "xl" ? "64px" : size === "lg" ? "56px" : "24px"};
		line-height: ${({ size }) =>
			size === "xl" ? "80px" : size === "lg" ? "72px" : "32px"};
	}
`;

const Title = ({ color = "neutral", size = "xl", children }: IProps) => {
	const { ref, inView: view } = useInView({ triggerOnce: true });
	return (
		<StyledTitle ref={ref} size={size} color={color} view={view}>
			{children}
		</StyledTitle>
	);
};

export default Title;
