import * as React from "react";
import styled from "styled-components";
import Image from "next/image";
import Card from "../shared/Card";

import SpeakerImg from "../../assets/speaker.svg";
import FacebookImg from "../../assets/facebook.svg";
import TwitterImg from "../../assets/Twitter.svg";
import LinkedinImg from "../../assets/LinkedIN.svg";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	p {
		margin: 0;
		font-size: small;
	}
	p:nth-child(2) {
		margin-top: 1rem;
		font-size: 1rem;
		color: #172b4d;
	}
	p:nth-child(3) {
		color: #42526e;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
	}
	.block__social {
		display: flex;
		gap: 1rem;
	}
	@media (min-width: 600px) {
		p {
			font-size: 1rem;
		}
		p:nth-child(2) {
			font-size: 1.25rem;
		}
		.block__social {
			img {
				transform: scale(1.25);
			}
		}
	}
`;

const SpeakerCard = () => {
	return (
		<Card>
			<Container>
				<Image src={SpeakerImg} alt="" className="" />
				<p>Kris Anfalova</p>
				<p>kris.anfalova@aws.com</p>
				<div className="block__social">
					<Image src={FacebookImg} alt="" className="" />
					<Image src={TwitterImg} alt="" className="" />
					<Image src={LinkedinImg} alt="" className="" />
				</div>
			</Container>
		</Card>
	);
};

export default SpeakerCard;
