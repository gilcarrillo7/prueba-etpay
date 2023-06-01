import * as React from "react";
import styled from "styled-components";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { useInView } from "react-intersection-observer";

interface IProps {
	variant: "blue" | "green";
	title: string;
	description: string;
	children: any;
}

const Container = styled.div`
	display: block;
	padding: 0;
	position: relative;
	padding-left: 120px;
	.block__ring {
		position: absolute;
		left: 0;
		width: 88px;
		height: 88px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		&--green {
			background-color: ${({ theme }) => theme.secondary100};
		}
		&--blue {
			background-color: ${({ theme }) => theme.primary100};
		}
		.block__ringinner {
			width: 64px;
			height: 64px;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.white};
			display: flex;
			justify-content: center;
			align-items: center;
			transition: opacity 1s ease-in-out;
			opacity: 0;
			&--view {
				opacity: 100;
			}
		}
	}
	.block__iconcard--text {
		text-align: left;
	}
	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 2rem;
		margin-left: 0;
		.block__iconcard--text {
			text-align: center;
		}
		.block__ring {
			position: relative;
			left: unset;
		}
	}
`;

const IconCard = ({ variant, title, description, children }: IProps) => {
	const { ref, inView: view } = useInView();
	return (
		<Container>
			<div className={`block__ring block__ring--${variant}`}>
				<div
					ref={ref}
					className={`block__ringinner ${view ? "block__ringinner--view" : ""}`}
				>
					{children}
				</div>
			</div>
			<div className="block__iconcard--text">
				<Title size="base">{title}</Title>
				<Paragraph size="base">{description}</Paragraph>
			</div>
		</Container>
	);
};

export default IconCard;
