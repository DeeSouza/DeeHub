import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
	return (
		<>
			<GlobalStyle />
			<ToastContainer autoClose={3000} />
			<Routes />
		</>
	);
}

export default App;
