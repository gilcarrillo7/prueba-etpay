import * as React from "react";
import styled from "styled-components";
import Card from "../shared/Card";

const Container = styled.div`
	display: flex;
	.block--card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		p {
			margin: 0;
		}
		p:nth-child(1) {
			color: #8993a4;
			font-size: 0.5rem;
			margin-bottom: 1rem;
		}
		p:nth-child(2) {
			color: #172b4d;
			font-weight: 700;
			font-size: 1rem;
		}
	}
	.block__left--card {
		border-color: #c1c7d0;
		border-style: dashed;
		border-width: 0;
		border-right-width: 1px;
		padding-right: 0.75rem;
	}
	.block__right--card {
		padding-left: 0.75rem;
	}
	@media (min-width: 600px) {
		.block--card {
			p {
				margin: 0;
			}
			p:nth-child(1) {
				font-size: small;
			}
			p:nth-child(2) {
				font-size: 2rem;
			}
		}
	}
`;

const RegistrationCard = () => {
	return (
		<Card>
			<Container>
				<div className="block--card block__left--card">
					<p>PRE-REGISTERED</p>
					<p>1203</p>
				</div>
				<div className="block--card block__right--card">
					<p>ONSPOT</p>
					<p>112</p>
				</div>
				<div className="line__divide"></div>
			</Container>
		</Card>
	);
};

export default RegistrationCard;
