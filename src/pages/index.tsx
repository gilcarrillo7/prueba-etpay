import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/layout/Header";
import { Container } from "../components/layout/Container";
import Footer from "../components/home/Footer";
import Tools from "../components/home/Tools";
import Divider from "../components/shared/Divider";
import Home from "../components/home/Home";
import Video from "../components/home/Video";
import VideoPlayer from "../components/home/VideoPlayer";
import { useAppSelector } from "../hooks";
import { selectVideoOpen } from "../features/video/videoSlice";

const IndexPage: NextPage = () => {
	const open = useAppSelector(selectVideoOpen);
	return (
		<>
			<Head>
				<title>Regim - Home</title>
			</Head>
			<Header />
			<Container>
				<Home />
				<Divider />
				<Video />
				<Tools />
			</Container>
			<Footer />
			{open && <VideoPlayer />}
		</>
	);
};

export default IndexPage;
