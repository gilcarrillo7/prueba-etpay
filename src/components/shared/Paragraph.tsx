import React from "react";
import { useInView } from "react-intersection-observer";
import styled, { DefaultTheme } from "styled-components";

interface IProps {
	size?: "base" | "lg" | "sm";
	color?: string;
	children: React.ReactNode;
}

const StyledParagraph = styled.p<{
	size: "base" | "lg" | "sm";
	color: string;
	view: boolean;
}>`
	color: ${({ theme, color }) => theme[color as keyof DefaultTheme]};
	font-size: ${({ size }) =>
		size === "base" ? "16px" : size === "lg" ? "18px" : "14px"};
	line-height: ${({ size }) =>
		size === "base" ? "24px" : size === "lg" ? "28px" : "14px"};
	font-weight: 400;
	transition: transform 0.5s ease-in-out;
	transform: ${({ view }) => (view ? "translateY(0)" : "translateY(5rem)")};
`;

const Paragraph = ({
	size = "base",
	color = "neutral700",
	children,
}: IProps) => {
	const { ref, inView: view } = useInView({ triggerOnce: true });
	return (
		<StyledParagraph ref={ref} size={size} color={color} view={view}>
			{children}
		</StyledParagraph>
	);
};

export default Paragraph;
