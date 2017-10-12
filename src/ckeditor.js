import React, { Component } from "react";
import ReactDOM from "react-dom";

class CKEditor extends Component {
  constructor(props) {
    super(props);

    this.changeListener = this.changeListener.bind(this);

    this.state = {
      value: props.value,
      config: props.config || {},
      onChange: props.onChange
    };
  }

  componentDidMount() {
    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.instance = window.CKEDITOR.appendTo(
      this.divRef,
      this.state.config,
      this.state.value
    );

    this.instance.on('instanceReady', (e) => {
      //Set content and read only flag again. Can have changed since init.
      e.editor.setData(this.state.value);
      if ("readOnly" in props.config)
        this.instance.setReadOnly(props.config.readOnly);
    });
    this.instance.on('change', this.changeListener);
  }

  componentWillReceiveProps(props) {
    if (!this.instance) {
      return;
    }

    //Only manipulate the editor when it's ready. The data will be set when it's
    //ready otherwise.
    if (this.instance.status === "ready") {

      if (this.state.value !== props.value) {
        // setData will move the cursor to the begining of the input
        this.instance.setData(props.value);
      }

      if (props.config && this.state.config !== props.config) {
        if ("readOnly" in props.config)
          this.instance.setReadOnly(props.config.readOnly);
      }
    }

    this.setState({
      value: props.value,
      config: props.config || {},
      onChange: props.onChange
    });
  }

  componentWillUnmount() {
    this.instance.removeListener("change", this.changeListener);
    this.instance.destroy();
  }

  changeListener() {
    this.state.value = this.instance.getData();
    this.handleChange();
  }

  handleChange() {
    this.state.onChange(this.state.value);
  }

  render() {
    return <div ref={(input) => this.divRef = input}/>;
  }
}

export default CKEditor;
