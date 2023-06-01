import * as React from "react";
import styled from "styled-components";
import AttendeesCard from "../cards/AttendeesCard";
import BadgeCard from "../cards/BadgeCard";
import BirdCard from "../cards/BirdCard";
import GraphCard from "../cards/GraphCard";
import RegistrationCard from "../cards/RegistrationCard";
import SalesCard from "../cards/SalesCard";
import SpeakerCard from "../cards/SpeakerCard";
import Button from "../shared/Button";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import { useInView } from "react-intersection-observer";

const HalfContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 32px;
	flex-direction: column;
	.block__left {
		padding-right: 0;
		button {
			margin-top: 40px;
		}
	}
	.block__right {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		.block__right--col {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
	.block__circle--main {
		z-index: -1;
		border-radius: 50%;
		position: absolute;
		width: 700px;
		height: 700px;
		right: -15%;
		bottom: 35%;
		background: ${({ theme }) => theme.secondary100};
		transition: transform 2s ease-in-out;
		&--hidden {
			transform: scale(0);
		}
		&--show {
			transform: scale(1);
		}
	}
	@media (min-width: 600px) {
		.block__left {
			padding-right: 10rem;
		}
	}
	@media (min-width: 1200px) {
		flex-direction: row;
		.block__left {
			padding-right: 0;
		}
	}
`;

const Home = () => {
	const { ref, inView: view } = useInView();
	return (
		<HalfContainer>
			<div className="block__left">
				<Title size="xl">Event Registration Reimagined</Title>
				<Paragraph>
					Manage your event registrations hassle free and without any dependency
					with the technical team. Isnt it sounds amazing?
				</Paragraph>
				<Button text="Get Early Access" />
			</div>
			<div className="block__right">
				<div className="block__right--col">
					<BadgeCard />
					<GraphCard />
				</div>
				<div className="block__right--col">
					<SpeakerCard />
					<RegistrationCard />
					<BirdCard />
				</div>
				<div className="block__right--col">
					<AttendeesCard />
					<SalesCard />
				</div>
			</div>
			<div
				ref={ref}
				className={`block__circle--main ${
					view ? "block__circle--main--show" : "block__circle--main--hidden"
				}`}
			></div>
		</HalfContainer>
	);
};

export default Home;
