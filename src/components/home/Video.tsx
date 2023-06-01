import * as React from "react";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/Title";
import IconCards from "./IconCards";
import VideoThumbnail from "./VideoThumbnail";

import VideoImage from "../../assets/video-thumbnail.png";

const Video = () => {
	return (
		<div className="block__center">
			<Title size="lg">All-in-one Event Platform</Title>
			<Paragraph>Deliver an exceptional event experience</Paragraph>
			<VideoThumbnail img={VideoImage} text={"See it in action (2 min)"} />
			<IconCards />
		</div>
	);
};

export default Video;
