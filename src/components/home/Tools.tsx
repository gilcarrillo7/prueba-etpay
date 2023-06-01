import * as React from "react";
import styled from "styled-components";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import Tool from "../shared/Tool";
import { useInView } from "react-intersection-observer";

const HalfContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding: 40px 0;
	border-top: solid 1px;
	border-color: ${({ theme }) => theme.neutral200};
	margin-bottom: 6rem;
	.block__left {
		width: 100%;
		padding-left: 0;
		text-align: center;
	}
	.block__right {
		width: 100%;
		.block__tools {
			display: flex;
			padding: 36px 0;
			&--top {
				justify-content: space-between;
			}
			&--bottom {
				justify-content: space-around;
			}
		}
	}
	.block__circle {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 800px;
		max-width: 100%;
		height: 150px;
		border-radius: 400px 400px 0 0;
		background: ${({ theme }) => theme.secondary100};
		transition: transform 1s ease-in-out;
		transform: rotate(180deg);
		&--hidden {
			transform: scale(0) rotate(180deg);
		}
		&--show {
			transform: scale(1) rotate(180deg);
		}
	}
	@media (min-width: 500px) {
		.block__circle {
			height: 250px;
		}
	}
	@media (min-width: 700px) {
		.block__circle {
			height: 300px;
		}
	}
	@media (min-width: 930px) {
		flex-direction: row;
		.block__left {
			width: 50%;
			padding-left: 16px;
			text-align: left;
		}
		.block__right {
			width: 50%;
		}
		.block__circle {
			height: 400px;
		}
	}
`;

const Tools = () => {
	const { ref, inView: view } = useInView({ triggerOnce: true });
	const toolsTop: string[] = ["slack", "qb", "monkey", "control"];
	const toolsBottom: string[] = ["star", "firebase", "azure"];

	return (
		<HalfContainer>
			<div className="block__left">
				<Title size="lg">Integrate with your favorite tools</Title>
				<Paragraph>
					Connect RegiM with your most favorite sales and marketing tools
				</Paragraph>
			</div>
			<div className="block__right">
				<div className="block__tools block__tools--top">
					{toolsTop.map((tool) => (
						<Tool key={tool} variant={tool} />
					))}
				</div>
				<div className="block__tools block__tools--bottom">
					{toolsBottom.map((tool) => (
						<Tool key={tool} variant={tool} />
					))}
				</div>
			</div>
			<div
				ref={ref}
				className={`block__circle ${
					view ? "block__circle--show" : "block__circle--hidden"
				}`}
			></div>
		</HalfContainer>
	);
};

export default Tools;
