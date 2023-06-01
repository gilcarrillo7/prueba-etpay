import * as React from "react";
import styled from "styled-components";
import Card from "../shared/Card";
import Donut from "../shared/Donut";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	p {
		font-size: small;
	}
	.p__title {
		color: #42526e;
	}
	.p__info {
		color: #8993a4;
		display: flex;
		align-items: center;
		margin: 0.5rem 0;
		justify-content: space-between;
		width: 100%;
		.span__number {
			margin-left: 5px;
			color: #172b4d;
			font-weight: 700;
			font-size: 1rem;
		}
	}
	@media (min-width: 600px) {
		p {
			font-size: 1rem;
		}
		.p__info {
			.span__number {
				font-size: 1.5rem;
			}
		}
	}
`;

const SalesCard = () => {
	return (
		<Card>
			<Container>
				<p className="p__title">TICKET SALES</p>
				<Donut color={"#AC5DD9"} bgcolor={"#DDA5E9"} percent={54} />
				<p className="p__info">
					<span>SOLD </span>
					<span className="span__number">84</span>
				</p>
				<p className="p__info">
					<span>AVAILABLE</span> <span className="span__number">76</span>
				</p>
			</Container>
		</Card>
	);
};

export default SalesCard;
