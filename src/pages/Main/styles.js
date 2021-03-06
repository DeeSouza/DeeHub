import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	padding: 0px 30px;

	input {
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 16px;
		width: 100%;
	}

	${props =>
		props.error &&
		css`
			input {
				border: 1px solid #de5d5d;
			}
		`}
`;

export const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
`;

export const SubmitButton = styled.button.attrs(props => ({
	type: 'submit',
	disabled: props.loading,
}))`
	background: #7159c1;
	border: 0;
	padding: 0 15px;
	border-radius: 4px;
	margin-left: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	${props =>
		props.loading &&
		css`
			svg {
				animation: ${rotate} 2s linear infinite;
			}
		`}
`;

export const List = styled.ul`
	list-style: none;
	margin-top: 30px;

	li {
		padding: 15px 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		transition: all 0.25s ease-out;

		span {
			font-weight: bold;
			width: 100%;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		& + li {
			border-top: 1px solid #eee;
		}

		&:hover {
			background-color: #eee;
		}

		a {
			color: #000;
			text-decoration: none;
		}
	}
`;
