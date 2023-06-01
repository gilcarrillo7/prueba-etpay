import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

interface IProps {
	children: React.ReactNode;
}

const StyledCard = styled.div<{ view: boolean }>`
	max-width: 100%;
	display: block;
	border: ${({ theme }) => `solid 1px ${theme.neutral200}`};
	border-radius: 1rem;
	box-shadow: 0px 8px 16px -4px rgba(28, 44, 64, 0.08);
	padding: 0.5rem;
	background-color: ${({ theme }) => theme.white};
	margin-bottom: 1rem;
	transition: transform 0.5s ease-in-out;
	opacity: ${({ view }) => (view ? "100" : "0")};
	transform: scale(0);
	transform: ${({ view }) => (view ? "scale(1)" : "scale(0)")};
	@media (min-width: 600px) {
		padding: 1rem;
	}
`;

const Card = ({ children }: IProps) => {
	const { ref, inView } = useInView();
	const [view, setView] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setView(inView);
		}, 400);
		return () => clearTimeout(timer);
	}, [inView]);

	return (
		<StyledCard ref={ref} view={view}>
			{children}
		</StyledCard>
	);
};

export default Card;
