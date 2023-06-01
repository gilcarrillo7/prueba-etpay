import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const ClockIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_2554_598)">
			<path
				d="M8.66683 3.99998C8.66683 3.63179 8.36835 3.33331 8.00016 3.33331C7.63197 3.33331 7.3335 3.63179 7.3335 3.99998V7.99998C7.3335 8.25249 7.47616 8.48334 7.70202 8.59626L10.3687 9.9296C10.698 10.0943 11.0985 9.96077 11.2631 9.63146C11.4278 9.30214 11.2943 8.90169 10.965 8.73703L8.66683 7.58796V3.99998Z"
				fill="#719F64"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.99984 0.666687C3.94975 0.666687 0.666504 3.94993 0.666504 8.00002C0.666504 12.0501 3.94975 15.3334 7.99984 15.3334C12.0499 15.3334 15.3332 12.0501 15.3332 8.00002C15.3332 3.94993 12.0499 0.666687 7.99984 0.666687ZM1.99984 8.00002C1.99984 4.68631 4.68613 2.00002 7.99984 2.00002C11.3135 2.00002 13.9998 4.68631 13.9998 8.00002C13.9998 11.3137 11.3135 14 7.99984 14C4.68613 14 1.99984 11.3137 1.99984 8.00002Z"
				fill="#719F64"
			/>
		</g>
		<defs>
			<clipPath id="clip0_2554_598">
				<rect width="16" height="16" fill="white" />
			</clipPath>
		</defs>
	</svg>
);

const CalendarIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M11.3334 1.33335C11.3334 0.965164 11.0349 0.666687 10.6667 0.666687C10.2985 0.666687 10 0.965164 10 1.33335V2.00002H6.00004V1.33335C6.00004 0.965164 5.70156 0.666687 5.33337 0.666687C4.96518 0.666687 4.66671 0.965164 4.66671 1.33335V2.00002H3.33337C2.2288 2.00002 1.33337 2.89545 1.33337 4.00002V13.3334C1.33337 14.4379 2.2288 15.3334 3.33337 15.3334H12.6667C13.7713 15.3334 14.6667 14.4379 14.6667 13.3334V4.00002C14.6667 2.89545 13.7713 2.00002 12.6667 2.00002H11.3334V1.33335ZM13.3334 6.00002V4.00002C13.3334 3.63183 13.0349 3.33335 12.6667 3.33335H11.3334V4.00002C11.3334 4.36821 11.0349 4.66669 10.6667 4.66669C10.2985 4.66669 10 4.36821 10 4.00002V3.33335H6.00004V4.00002C6.00004 4.36821 5.70156 4.66669 5.33337 4.66669C4.96518 4.66669 4.66671 4.36821 4.66671 4.00002V3.33335H3.33337C2.96518 3.33335 2.66671 3.63183 2.66671 4.00002V6.00002H13.3334ZM2.66671 7.33335H13.3334V13.3334C13.3334 13.7015 13.0349 14 12.6667 14H3.33337C2.96518 14 2.66671 13.7015 2.66671 13.3334V7.33335Z"
			fill="#719F64"
		/>
	</svg>
);

const LocationIcon = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.62988 15.8878C7.62988 15.8878 7.63024 15.888 8.00004 15.3333L8.36984 15.888C8.14591 16.0373 7.85381 16.0371 7.62988 15.8878Z"
			fill="#719F64"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.00004 4C6.52728 4 5.33337 5.19391 5.33337 6.66667C5.33337 8.13943 6.52728 9.33333 8.00004 9.33333C9.4728 9.33333 10.6667 8.13943 10.6667 6.66667C10.6667 5.19391 9.4728 4 8.00004 4ZM6.66671 6.66667C6.66671 5.93029 7.26366 5.33333 8.00004 5.33333C8.73642 5.33333 9.33337 5.93029 9.33337 6.66667C9.33337 7.40305 8.73642 8 8.00004 8C7.26366 8 6.66671 7.40305 6.66671 6.66667Z"
			fill="#719F64"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.62988 15.8878L8.00004 15.3333C8.36984 15.888 8.3707 15.8875 8.3707 15.8875L8.37211 15.8865L8.37655 15.8835L8.39183 15.8732C8.40481 15.8644 8.42332 15.8517 8.447 15.8353C8.49435 15.8025 8.5624 15.7547 8.64818 15.6928C8.81968 15.5689 9.06247 15.3881 9.35283 15.1569C9.93249 14.6954 10.7071 14.0286 11.484 13.2085C13.0105 11.5972 14.6667 9.26796 14.6667 6.66667C14.6667 4.89856 13.9643 3.20286 12.7141 1.95262C11.4638 0.702379 9.76815 0 8.00004 0C6.23193 0 4.53624 0.702379 3.286 1.95262C2.03575 3.20286 1.33337 4.89856 1.33337 6.66667C1.33337 9.26796 2.98955 11.5972 4.51607 13.2085C5.29297 14.0286 6.0676 14.6954 6.64726 15.1569C6.93761 15.3881 7.1804 15.5689 7.3519 15.6928C7.43768 15.7547 7.50573 15.8025 7.55308 15.8353C7.57676 15.8517 7.59527 15.8644 7.60825 15.8732L7.62353 15.8835L7.62797 15.8865L7.62988 15.8878ZM4.2288 2.89543C5.229 1.89524 6.58555 1.33333 8.00004 1.33333C9.41453 1.33333 10.7711 1.89524 11.7713 2.89543C12.7715 3.89562 13.3334 5.25218 13.3334 6.66667C13.3334 8.73204 11.9895 10.7362 10.5161 12.2915C9.79297 13.0548 9.0676 13.6796 8.52226 14.1139C8.3193 14.2755 8.14202 14.4101 8.00004 14.5151C7.85806 14.4101 7.68078 14.2755 7.47783 14.1139C6.93249 13.6796 6.20712 13.0548 5.48401 12.2915C4.01053 10.7362 2.66671 8.73204 2.66671 6.66667C2.66671 5.25218 3.22861 3.89562 4.2288 2.89543Z"
			fill="#719F64"
		/>
	</svg>
);

const Container = styled.div<{ view: boolean }>`
	display: block;
	width: 100%;
	flex-direction: column;
	position: relative;
	border: ${({ theme }) => `solid 1px ${theme.neutral200}`};
	border-radius: 1rem;
	box-shadow: 0px 8px 16px -4px rgba(28, 44, 64, 0.08);
	font-size: small;
	background-color: #fff;
	transition: transform 0.5s ease-in-out;
	opacity: ${({ view }) => (view ? "100" : "0")};
	transform: ${({ view }) => (view ? "scale(1)" : "scale(0)")};
	.block__container {
		padding: 0.5rem;
		p {
			color: #7a869a;
			font-size: small;
		}
		.p__top {
			color: #7a869a;
			display: flex;
			justify-content: space-between;
			span:nth-child(2) {
				color: #719f64;
				font-weight: 700;
				font-size: 1rem;
			}
		}
		.block__icon {
			display: flex;
			gap: 0.5rem;
			padding: 0.25rem 0;
		}
	}
	.border__dashed {
		border-top: dashed 1px #c1c7d0;
		margin: 2rem 0;
	}
	.p__footer {
		background-color: #5e8553;
		color: #bee5a5;
		padding: 1rem;
		text-align: center;
		border-bottom-left-radius: 1rem;
		border-bottom-right-radius: 1rem;
		font-size: small;
	}
	@media (min-width: 600px) {
		font-size: 1rem;
		.block__container {
			padding: 1rem;
			p {
				font-size: 1rem;
			}
			.p__top {
				font-size: 1rem;
				span:nth-child(2) {
					font-size: 1.5rem;
				}
			}
		}
		.p__footer {
			font-size: 1rem;
		}
	}
`;

const BirdCard = () => {
	const { ref, inView } = useInView();
	const [view, setView] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setView(inView);
		}, 600);
		return () => clearTimeout(timer);
	}, [inView]);

	return (
		<Container ref={ref} view={view}>
			<div className="block__container">
				<p className="p__top">
					<span>EARLY BIRD</span>
					<span>₹ 2500</span>
				</p>
				<p className="">Grants Access Per Adult, Includes Course Materials</p>
				<div className="border__dashed"></div>
				<div className="block__icon">
					<ClockIcon />
					09:30AM - 05:30PM
				</div>
				<div className="block__icon">
					<CalendarIcon />
					Sun, 18 Jul 2020
				</div>
				<div className="block__icon">
					<LocationIcon />
					ITC Gardenia, Bangalore
				</div>
			</div>
			<div className="p__footer">BOOK TICKETS</div>
		</Container>
	);
};

export default BirdCard;
