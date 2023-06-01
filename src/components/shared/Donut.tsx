import * as React from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface IProps {
	color: string;
	bgcolor: string;
	percent: number;
	view?: boolean;
}

const StyledDonut = styled.div<IProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: ${({ percent, color, bgcolor }) =>
		`conic-gradient(${color} 0deg ${percent}deg, ${bgcolor} ${percent}deg 360deg)`};
	transition: opacity 1s ease-in-out;
	opacity: ${({ view }) => (view ? "100" : "0")};
	.block__hole {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		color: ${({ color }) => `${color}`};
		font-weight: 700;
		font-size: 1rem;
	}
	@media (min-width: 600px) {
		width: 100px;
		height: 100px;
		.block__hole {
			width: 80px;
			height: 80px;
			font-size: 1.25rem;
		}
	}
`;

const Donut = ({ color, bgcolor, percent }: IProps) => {
	const { ref, inView: view } = useInView();
	const deg = (percent * 360) / 100;
	return (
		<StyledDonut
			ref={ref}
			color={color}
			bgcolor={bgcolor}
			percent={deg}
			view={view}
		>
			<div className="block__hole">{percent}%</div>
		</StyledDonut>
	);
};

export default Donut;
