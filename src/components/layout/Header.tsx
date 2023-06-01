import * as React from "react";
import styled from "styled-components";
import Regim from "../icons/Regim";
import Button from "../shared/Button";
import { Container } from "./Container";

const Header = () => {
	return (
		<header>
			<Container>
				<div className="block__header">
					<Regim />
					<Button text="Get Early Access" />
				</div>
			</Container>
		</header>
	);
};

export default Header;
