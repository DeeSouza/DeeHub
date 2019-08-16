import styled, { keyframes } from 'styled-components';

export const load = keyframes`
	0% {
	  -webkit-transform: rotate(0deg);
	  transform: rotate(0deg);
	}
	100% {
	  -webkit-transform: rotate(360deg);
	  transform: rotate(360deg);
	}
`;

export const Loading = styled.div`
	color: #fff;
	font-size: 30px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;

	.loader,
	.loader:after {
		border-radius: 50%;
		width: 10em;
		height: 10em;
	}
	.loader {
		margin: 60px auto;
		font-size: 10px;
		position: relative;
		text-indent: -9999em;
		border-top: 1.1em solid rgba(255, 255, 255, 0.2);
		border-right: 1.1em solid rgba(255, 255, 255, 0.2);
		border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
		border-left: 1.1em solid #ffffff;
		transform: translateZ(0);
		animation: ${load} 1.1s infinite linear;
	}
`;

export const Owner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		text-decoration: none;
		color: #7159c1;
		font-size: 14px;
		margin-left: 30px;
		padding: 8px 12px;
		border-radius: 4px;
		transition: all 0.25s ease-in;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-self: flex-start;

		span {
			margin-left: 5px;
		}

		&:hover {
			background-color: #7159c1;
			color: #fff;
		}
	}

	img {
		width: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}

	h1 {
		font-size: 24px;
		margin-top: 10px;
	}

	p {
		margin-top: 5px;
		font-size: 14px;
		color: #666;
		line-height: 1.4;
		text-align: center;
		max-width: 400px;
		width: 90%;
	}
`;

export const IssueList = styled.ul`
	padding: 30px 30px 0px 30px;
	border-top: 1px solid #eee;
	margin-top: 30px;
	list-style: none;

	li {
		display: flex;
		padding: 15px 10px;
		border: 1px solid #eee;
		border-radius: 4px;

		& + li {
			margin-top: 10px;
		}

		img {
			width: 36px;
			height: 36px;
			border-radius: 50%;
			border: 2px solid #eee;
		}

		div {
			flex: 1;
			margin-left: 15px;

			strong {
				font-size: 15px;

				a {
					text-decoration: none;
					color: #333;

					&:hover {
						color: #7159c1;
					}
				}

				span {
					background-color: #eee;
					color: #333;
					border-radius: 3px;
					font-size: 11px;
					font-weight: 400;
					height: 24px;
					padding: 3px 4px;
					margin-left: 10px;
				}
			}

			p {
				margin-top: 5px;
				font-size: 12px;
				color: #999;
			}
		}
	}
`;

export const Paginate = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	margin-top: 30px;
	padding: 0px 35px;
	align-items: center;
`;

export const ButtonPaginatePrev = styled.button.attrs(props => ({
	disabled: props.page === 1,
}))`
	width: 30px;
	height: 30px;
	background-color: #fff;
	border: none;
	border-radius: 5px;
	text-align: center;
	color: #7159c1;
	background: none;
	transition: all 0.25s ease-out;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	&:hover:not([disabled]) {
		opacity: 0.8;
	}
`;

export const ButtonPaginateNext = styled(ButtonPaginatePrev).attrs(props => ({
	disabled: props.amount < 30,
}))``;
