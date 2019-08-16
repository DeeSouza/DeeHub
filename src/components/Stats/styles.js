import styled from 'styled-components';

export const Container = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;

	li {
		padding: 10px 15px;
		font-weight: bold;
		background-color: #eee;
		color: #777;
		margin: 5px;
		border-radius: 4px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		svg {
			margin-left: 5px;
		}
	}

	@media (min-width: 568px) {
		flex-direction: row;

		li {
			margin: 0px 5px;
		}
	}
`;
