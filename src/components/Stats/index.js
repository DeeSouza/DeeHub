import React from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaStar, FaHeart, FaCopy } from 'react-icons/fa';
import { Container } from './styles';

const Stats = ({ repo }) => (
	<Container>
		<li>
			{repo.forks_count} <FaCopy size={12} />
		</li>
		<li>
			{repo.stargazers_count} <FaStar size={12} />
		</li>
		<li>
			{repo.subscribers_count} <FaHeart size={12} />
		</li>
		<li>
			{repo.watchers_count} <FaEye size={12} />
		</li>
	</Container>
);

Stats.propTypes = {
	repo: PropTypes.shape({
		forks_count: PropTypes.number,
		stargazers_count: PropTypes.number,
		subscribers_count: PropTypes.number,
		watchers_count: PropTypes.number,
	}).isRequired,
};

export default Stats;
