import * as React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { hideVideo } from "../../features/video/videoSlice";
import { useAppDispatch } from "../../hooks";

const StyledVideo = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.8);
	.video__container {
		width: 50%;
		height: 50%;
	}
`;

const VideoPlayer = () => {
	const dispatch = useAppDispatch();
	return (
		<StyledVideo onClick={() => dispatch(hideVideo())}>
			<div className="video__container">
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					playing
					url={`https://www.youtube.com/watch?v=ysz5S6PUM-U`}
				></ReactPlayer>
			</div>
		</StyledVideo>
	);
};

export default VideoPlayer;
