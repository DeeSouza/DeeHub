import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus, FaSpinner, FaListAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';

import api from '../../services/api';

export default class Main extends Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false,
		error: false,
	};

	componentDidMount() {
		const repositories = localStorage.getItem('repositories');

		if (repositories) {
			this.setState({
				repositories: JSON.parse(repositories),
			});
		}
	}

	componentDidUpdate(_, prevState) {
		const { repositories } = this.state;

		if (prevState.repositories !== repositories) {
			localStorage.setItem('repositories', JSON.stringify(repositories));
		}
	}

	handleInputChange = e => {
		this.setState({
			newRepo: e.target.value,
		});
	};

	/**
	 * Check repo if exists in localStrage
	 */
	checkExistsRepo = name => {
		const { repositories } = this.state;

		const has = repositories.find(repo => repo.name === name);

		return has;
	};

	/**
	 * Add repository in list and localStorage
	 */
	handleSubmit = async e => {
		e.preventDefault();
		const { newRepo, repositories } = this.state;

		this.setState({
			loading: true,
		});

		try {
			// Check if repo already exists
			const hasRepo = this.checkExistsRepo(newRepo);

			if (hasRepo) {
				throw new Error('repo_exist');
			}

			// Call API
			const response = await api.get(`/repos/${newRepo}`);

			const data = {
				name: response.data.full_name,
			};

			this.setState({
				repositories: [...repositories, data],
				newRepo: '',
				loading: false,
				error: false,
			});

			toast.success('Repositório adicionado na lista! 😆😆😆', {
				position: toast.POSITION.BOTTOM_CENTER,
			});
		} catch (err) {
			if (err.message === 'repo_exist') {
				toast.warn('Você já adicionou esse repositório! 🤦‍🤦‍🤦‍ ', {
					position: toast.POSITION.BOTTOM_CENTER,
				});
			} else {
				toast.error('Repositório não encontrado! 😭😭😭', {
					position: toast.POSITION.BOTTOM_CENTER,
				});
			}

			this.setState({
				loading: false,
				error: true,
			});
		}
	};

	render() {
		const { newRepo, loading, repositories, error } = this.state;

		return (
			<Container>
				<h1>
					<FaGithubAlt size={30} color="#7159c1" />
					REPOSITÓRIOS
					<small>
						Digite abaixo o repositório para adicioná-lo na lista.
					</small>
				</h1>

				<Form onSubmit={this.handleSubmit} error={error}>
					<input
						type="text"
						placeholder="example: facebook/react"
						value={newRepo}
						onChange={this.handleInputChange}
					/>

					<SubmitButton loading={loading}>
						{loading ? (
							<FaSpinner color="#FFF" size={14} />
						) : (
							<FaPlus color="#FFF" size={14} />
						)}
					</SubmitButton>
				</Form>

				<List>
					{repositories.map(repository => (
						<li key={repository.name}>
							<span>{repository.name}</span>
							<Link
								to={`/repository/${encodeURIComponent(
									repository.name
								)}`}
							>
								<FaListAlt size={20} />
							</Link>
						</li>
					))}
				</List>
			</Container>
		);
	}
}
