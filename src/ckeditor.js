import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CKEditor extends Component {
	constructor(props) {
		super();
	}

	componentDidMount() {
		CKEDITOR.appendTo(ReactDOM.findDOMNode(this));
	}

	render() {
		return (<div></div>);
	}
}

export default CKEditor;
