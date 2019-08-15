import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Filter({ status, onStatus }) {
	return (
		<Container status={status}>
			<button type="button" onClick={() => onStatus('all')}>
				Todos
			</button>
			<button type="button" onClick={() => onStatus('open')}>
				Abertos
			</button>
			<button type="button" onClick={() => onStatus('closed')}>
				Fechados
			</button>
		</Container>
	);
}

Filter.propTypes = {
	status: PropTypes.string,
	onStatus: PropTypes.func,
}.isRequired;
