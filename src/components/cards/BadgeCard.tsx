import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import QR from "../../assets/qr.svg";
import AWS from "../../assets/aws.svg";
import AWSub from "../../assets/awssub.svg";
import { useInView } from "react-intersection-observer";

const Container = styled.div<{ view: boolean }>`
	width: 100%;
	margin-bottom: 1rem;
	display: block;
	flex-direction: column;
	position: relative;
	border-radius: 1rem;
	border: ${({ theme }) => `solid 1px ${theme.neutral200}`};
	border-radius: 1rem;
	background-color: #fff;
	font-size: small;
	transition: transform 0.5s ease-in-out;
	opacity: ${({ view }) => (view ? "100" : "0")};
	transform: ${({ view }) => (view ? "scale(1)" : "scale(0)")};
	.block__gradient {
		width: 100%;
		height: 30px;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		background: linear-gradient(
			90deg,
			#5992ab 0%,
			#5661b0 19.25%,
			#bf539d 43.82%,
			#f09b56 58.29%,
			#bfc3dd 94.03%
		);
	}
	.block__black {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		background-color: #000;
		padding: 0.5rem;
		img {
			max-width: 100%;
			width: 80%;
		}
	}
	.block__container {
		padding: 0.5rem;
		.p__title {
			color: #172b4d;
			font-size: small;
		}
		.p__subtitle {
			color: #42526e;
			font-size: 0.5rem;
		}
	}
	.p__vertical {
		background-color: #88ceb8;
		position: absolute;
		bottom: 0;
		right: 1rem;
		padding: 1rem 0.25rem;
		p {
			writing-mode: vertical-rl;
			text-orientation: mixed;
			transform: scaleX(-1) scaleY(-1);
			margin: 0;
		}
	}
	@media (min-width: 600px) {
		font-size: 1rem;
		.block__black {
			padding: 1rem;
		}
		.block__container {
			padding: 1rem;
			.p__title {
				font-size: 1rem;
			}
			.p__subtitle {
				font-size: small;
			}
		}
	}
`;

const BadgeCard = () => {
	const { ref, inView } = useInView();
	const [view, setView] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setView(inView);
		}, 200);
		return () => clearTimeout(timer);
	}, [inView]);

	return (
		<Container ref={ref} view={view}>
			<div className="block__gradient"></div>
			<div className="block__black">
				<Image src={AWS} alt="" />
				<Image src={AWSub} alt="" />
			</div>
			<div className="block__container">
				<Image src={QR} alt="" />
				<p className="p__title">Scarlett Johansson</p>
				<p className="p__subtitle">Amazon Inc.</p>
			</div>
			<div className="p__vertical">
				<p>SPEAKER</p>
			</div>
		</Container>
	);
};

export default BadgeCard;
