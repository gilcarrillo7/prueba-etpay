import React from "react";
import styled from "styled-components";

interface IProps {
	text: string;
}

const StyledButton = styled.button`
	background: ${({ theme }) => theme.primary600};
	color: ${({ theme }) => theme.white};
	border-radius: 6px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 10px 16px;
	gap: 8px;
	width: 145px;
	height: 40px;
	border-width: 0;
	font-weight: 600;
	cursor: pointer;
	&:hover {
		background-color: ${({ theme }) => theme.primary100};
		color: ${({ theme }) => theme.neutral900};
	}
`;

const Button = ({ text }: IProps) => {
	return <StyledButton>{text}</StyledButton>;
};

export default Button;
