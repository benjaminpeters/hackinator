import React, { Component } from "react";
import "./ArticlePreview.css";
import {summarizeFromUrl} from "../lib/ArticleSummary.js";

class Preview extends Component {
	constructor(props){
		super(props);
		this.getData = this.getData.bind(this);
		this.setContent = this.setContent.bind(this);
		this.state = {
			s: props.s,
			content: "Getting summary..."
		};
	}

	getData(){
		var url = this.state.s.url;
		var content = "";

		function getSum(address, fn){
			summarizeFromUrl(url, function(err, summary) {
			  if(err) {
			    console.log("err is " + err)
			  }
			  else {
					fn(summary);
			  }
			});
		}

		getSum("address", this.setContent);
		console.log(content);
	}

	setContent(content){
		this.setState({ content: content });
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
		this.getData();
		console.log(this.state.content);
	  this.setState({
	    styles: {
	      top: this.state.s.y,
	      left: this.state.s.x
	    }
	  })
	}

	render(){
		return(
			<div id="preview-container" style={this.state.styles}>
				<Summary content={this.state.content}/>
			</div>
		);
	}
}


const Summary = (props) => {
	  return(
			<p className="summarybox">
				{props.content}
			</p>
		)
}
export default Preview;
