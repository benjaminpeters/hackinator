import React, { Component } from "react";
import "./ArticlePreview.css";

class Preview extends Component {
	constructor(props){
		super(props);
		this.state = {
			s: props.s
		};
	}

	getInitialState() {
	  return {
	    styles: {
	      top: 0,
	      left: 0
	    }
	  };
	}

	componentDidMount() {
	  this.setState({
	    styles: {
	      top: 24,
	      left: this.state.s.x
	    }
	  })
	}

	render(){
		return(
			<div id="preview-container" style={this.state.styles}>
			</div>
		);
	}
}

export default Preview;
