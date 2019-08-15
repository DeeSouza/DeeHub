import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Container from '../../components/Container';
import {
	Loading,
	Owner,
	IssueList,
	Paginate,
	ButtonPaginatePrev,
	ButtonPaginateNext,
} from './styles';
import Stats from '../../components/Stats';
import Filter from '../../components/Filter';
import api from '../../services/api';

export default class Repository extends Component {
	state = {
		repository: [],
		issues: [],
		loading: true,
		status: 'all',
		repo: '',
		page: 1,
	};

	async componentDidMount() {
		const { match } = this.props;
		const repoName = decodeURIComponent(match.params.repository);

		this.setState(
			{
				repo: repoName,
			},
			() => {
				this.loadRepoIssues();
			}
		);
	}

	componentDidUpdate(_, prevState) {
		const { status, repo, page } = this.state;

		if (prevState.status !== status) {
			this.loadIssues(repo);
		}

		if (prevState.page !== page) {
			this.loadIssues(repo);
		}
	}

	/**
	 * Filter status from issues
	 */
	handleChangeStatus = status => this.setState({ status, page: 1 });

	/**
	 * Loading issues and paginate
	 */
	loadIssues = async () => {
		const { status, repo, page } = this.state;

		const issues = await api.get(`/repos/${repo}/issues`, {
			params: { state: status, page },
		});

		this.setState({ issues: issues.data });
	};

	/**
	 * Initialize page loading repository details and issues list
	 */
	loadRepoIssues = async () => {
		const { status, repo } = this.state;

		const [repository, issues] = await Promise.all([
			api.get(`/repos/${repo}`),
			api.get(`/repos/${repo}/issues`, {
				params: { state: status },
			}),
		]);

		this.setState({
			repository: repository.data,
			issues: issues.data,
			loading: false,
		});
	};

	render() {
		const { repository, issues, loading, status, page } = this.state;

		if (loading) {
			return (
				<Loading>
					<div className="loader" />
				</Loading>
			);
		}

		return (
			<Container>
				<Owner>
					<Link to="/">
						<FaArrowLeft size={15} />
						<span>Voltar</span>
					</Link>

					<img
						src={repository.owner.avatar_url}
						alt={repository.owner.login}
					/>
					<h1>{repository.name}</h1>
					<p>{repository.description}</p>

					<Stats repo={repository} />
				</Owner>

				{(issues.length > 0 ||
					(status === 'open' || status === 'closed')) && (
					<Filter
						status={status}
						onStatus={s => this.handleChangeStatus(s)}
					/>
				)}

				{issues.length > 0 && (
					<IssueList>
						{issues.map(issue => (
							<li key={String(issue.id)}>
								<img
									src={issue.user.avatar_url}
									alt={issue.user.login}
								/>

								<div>
									<strong>
										<a
											href={issue.html_url}
											target="_blank"
											rel="noopener noreferrer"
										>
											{issue.title}
										</a>
										{issue.labels.map(label => (
											<span key={label.id}>
												{label.name}
											</span>
										))}
									</strong>
									<p>{issue.user.login}</p>
								</div>
							</li>
						))}
					</IssueList>
				)}

				{issues.length >= 30 && (
					<Paginate>
						{/* Prev Button Paginate */}
						<ButtonPaginatePrev
							page={page}
							amount={issues.length}
							type="button"
							onClick={() => this.setState({ page: page - 1 })}
						>
							ANTERIOR
						</ButtonPaginatePrev>

						<div>
							Página <strong>{page}</strong>
						</div>

						{/* Next Button Paginate */}
						<ButtonPaginateNext
							page={page}
							amount={issues.length}
							type="button"
							onClick={() => this.setState({ page: page + 1 })}
						>
							PRÓXIMO
						</ButtonPaginateNext>
					</Paginate>
				)}

				{/* No Issues */}
				{!issues.length > 0 && (
					<div className="noissues">
						Nenhum <strong>issue</strong> foi encontrado. 😭
					</div>
				)}
			</Container>
		);
	}
}

Repository.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			repository: PropTypes.string,
		}),
	}).isRequired,
};
