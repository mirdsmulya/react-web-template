import React, {propTypes} from 'react';
import { render } from 'react-dom';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';



class App extends React.Component {
	constructor(props, context) {
		super(props,context);
		this.state = {};

	}

	render() {
		return(
			<div>
			<h1>Hello Pals!</h1>
			</div>

			);
	}
}

render(
		<App />,
	document.getElementById('app')
);
