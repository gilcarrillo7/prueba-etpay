import * as React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
	showVideo,
	selectVideoOpen,
} from "../../features/video/videoSlice";

import Paragraph from "../shared/Paragraph";
import { useInView } from "react-intersection-observer";

interface IProps {
	img: StaticImageData;
	text: string;
}

const VideoIcon = () => (
	<svg
		width="25"
		height="24"
		viewBox="0 0 25 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_2554_764)">
			<path
				d="M12.5 22C18.023 22 22.5 17.523 22.5 12C22.5 6.477 18.023 2 12.5 2C6.977 2 2.5 6.477 2.5 12C2.5 17.523 6.977 22 12.5 22ZM12.5 24C5.873 24 0.5 18.627 0.5 12C0.5 5.373 5.873 0 12.5 0C19.127 0 24.5 5.373 24.5 12C24.5 18.627 19.127 24 12.5 24Z"
				fill="#6B7280"
			/>
			<path d="M10.5 17L16.5 12L10.5 7V17Z" fill="#6B7280" />
		</g>
		<defs>
			<clipPath id="clip0_2554_764">
				<rect width="24" height="24" fill="white" transform="translate(0.5)" />
			</clipPath>
		</defs>
	</svg>
);

const Thumbnail = styled.div<{ view: boolean }>`
	position: relative;
	margin-top: 48px;
	transition: transform 1s ease-in-out;
	opacity: ${({ view }) => (view ? "100" : "0")};
	transform: ${({ view }) => (view ? "scale(1)" : "scale(0)")};
	img {
		max-width: 100%;
	}
	.block__altvideo {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 0.5rem 1.5rem;
		gap: 12px;
		position: absolute;
		left: calc(50% - 234px / 2 + 1.5px);
		bottom: -28px;
		background: ${({ theme }) => theme.white};
		box-shadow: 0px 8px 16px -4px rgba(28, 44, 64, 0.08);
		border-radius: 100px;
		cursor: pointer;
		.icon--video {
		}
	}
`;

const VideoThumbnail = ({ img, text }: IProps) => {
	const dispatch = useAppDispatch();
	const open = useAppSelector(selectVideoOpen);
	const { ref, inView: view } = useInView({ triggerOnce: true });

	return (
		<>
			<Thumbnail ref={ref} view={view}>
				<Image src={img} alt={text} />
				<div className="block__altvideo" onClick={() => dispatch(showVideo())}>
					<Paragraph>{text}</Paragraph>
					<VideoIcon />
				</div>
			</Thumbnail>
		</>
	);
};

export default VideoThumbnail;
