import * as React from "react";
import styled from "styled-components";
import { Container } from "../layout/Container";
import Title from "../shared/Title";
import Paragraph from "../shared/Paragraph";
import Button from "../shared/Button";

const IconRegim = () => (
	<svg
		width="32"
		height="44"
		viewBox="0 0 32 44"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M27.9764 43.3333H2.59403C1.16139 43.3333 0 42.1781 0 40.7531V3.24686C0 1.82183 1.16139 0.666626 2.59403 0.666626H17.5564C27.5175 0.666626 32 7.72613 32 14.7856C32 20.7924 28.8249 26.0561 21.9144 27.79L30.0924 39.2605C31.3106 40.9691 30.0823 43.3333 27.9764 43.3333Z"
			fill="url(#paint0_linear_5025_377)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_5025_377"
				x1="16.4981"
				y1="0.666626"
				x2="16.4981"
				y2="43.3333"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#2ED4FF" />
				<stop offset="1" stopColor="#0088FF" />
			</linearGradient>
		</defs>
	</svg>
);

const StyledFooter = styled.div`
	background-color: ${({ theme }) => theme.neutral900};
	.block__footer--up {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 112px 0;
		button {
			margin-top: 1rem;
		}
		@media (min-width: 1200px) {
			padding: 112px 220px;
		}
	}
	.block__footer--icon {
		display: flex;
		justify-content: center;
		margin-bottom: 1rem;
		position: relative;
		.block__footer--divider {
			z-index: 0;
			position: absolute;
			top: 50%;
			width: 100%;
			border-top: solid 1px;
			border-color: ${({ theme }) => theme.white};
			opacity: 0.1;
		}
		svg {
			z-index: 1;
		}
	}
	.block__footer--down {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		a {
			text-decoration: none;
			color: ${({ theme }) => theme.primary100};
		}
		@media (min-width: 700px) {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<div className="block__footer--up">
					<Title color="white">Create your event with RegiM</Title>
					<Paragraph color="white">
						Leveraging our virtual and live event experience, Hubilo offers
						everything you need to set up your next hybrid event from
						registration to executing a flawless event.
					</Paragraph>
					<Button text={"Get Early Access"} />
				</div>
				<div className="block__footer--icon">
					<IconRegim />
					<div className="block__footer--divider"></div>
				</div>
				<div className="block__footer--down">
					<Paragraph color="neutral400" size="sm">
						© RegiM 2022. Made with love by <a href="#">Landify</a>
					</Paragraph>
					<Paragraph color="neutral400" size="sm">
						For further details, drop a mail to{" "}
						<a href="mailto:hello@landify.design">hello@landify.design</a>
					</Paragraph>
				</div>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
