import styled from 'styled-components';

const Container = styled.div`
	max-width: 700px;
	width: 90%;
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	padding: 30px 0px;
	margin: 80px auto;

	h1 {
		display: flex;
		font-size: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0px 30px;
		color: #5c5c5d;

		svg {
			margin-right: 10px;
			margin-bottom: 15px;
		}

		small {
			font-size: 12px;
			color: #8a8a8a;
			margin-top: 2px;
			color: #757575;
		}
	}

	div.noissues {
		color: #d00000;
		background-color: #f1c9c9;
		padding: 15px 30px;
		font-size: 14px;
		margin: 30px auto 0px auto;
		max-width: 700px;
		width: 90%;
		border-radius: 4px;
	}
`;

export default Container;
