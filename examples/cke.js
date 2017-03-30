import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CKEditor from 'react-ckeditor-wrapper';

class App extends Component {
	constructor(props) {
		super();
    
	}

	componentDidMount() {
    
	}

	render() {
		return (<div><CKEditor></CKEditor></div>);
	}
}



ReactDOM.render(<App />, document.getElementById('__react-content'));
