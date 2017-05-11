import React, { Component } from "react";
import ReactDOM from "react-dom";

class CKEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      config: props.config || {},
      onChange: props.onChange
    };
  }

  handleChange() {
    this.state.onChange(this.state.value);
  }

  componentDidMount() {
    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.instance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.state.config,
      this.state.value
    );
    this.instance.on("change", () => {
      this.state.value = this.instance.getData();
      this.handleChange();
    });
  }

  componentWillReceiveProps(props) {
    if (!this.instance) {
      return;
    }

    if (this.state.value !== props.value) {
      // setData will move the cursor to the begining of the input
      this.instance.setData(props.value);
    }

    if (props.config && this.state.config !== props.config) {
      if ("readOnly" in props.config)
        this.instance.setReadOnly(props.config.readOnly);
    }

    this.setState({
      value: props.value,
      config: props.config || {},
      onChange: props.onChange
    });
  }

  render() {
    return <div />;
  }
}

export default CKEditor;
