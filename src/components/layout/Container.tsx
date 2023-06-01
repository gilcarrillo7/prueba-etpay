import styled from "styled-components";

export const Container = styled.div`
	width: calc(100% - 40px);
	padding: 0 20px;
	@media (min-width: 375px) {
		width: calc(100% - 80px);
		padding: 0 40px;
	}
	@media (min-width: 768px) {
		width: calc(100% - 224px);
		padding: 0 112px;
	}
`;
