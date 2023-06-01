import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
	width: 100%;
	border-top: solid 1px;
	border-color: ${({ theme }) => theme.neutral200};
	margin: 6rem 0;
`;

const Divider = () => {
	return <StyledDiv></StyledDiv>;
};

export default Divider;
