import styled, { css } from 'styled-components';

export const Container = styled.div`
	list-style: none;
	padding: 0px 30px;
	display: flex;
	flex-direction: row;
	margin-top: 30px;
	justify-content: center;

	button {
		margin: 0px 10px;
		width: 80px;
		background-color: #fff;
		border: 1px solid #7159c1;
		border-radius: 5px;
		padding: 5px 10px;
		text-align: center;
		color: #7159c1;
		background: none;

		${props =>
			props.status === 'all' &&
			css`
				&:nth-child(1) {
					background-color: #7159c1;
					color: #fff;
				}
			`}

		${props =>
			props.status === 'open' &&
			css`
				&:nth-child(2) {
					background-color: #7159c1;
					color: #fff;
				}
			`}

		${props =>
			props.status === 'closed' &&
			css`
				&:nth-child(3) {
					background-color: #7159c1;
					color: #fff;
				}
			`}
	}
`;
