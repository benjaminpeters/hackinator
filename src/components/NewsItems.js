import React, { Component } from "react";
import "./NewsItems.css";

const NewsItem = (props) => {
  return(
      <div className="list">
        <article className="d-flex">
          <a href="">
            <span className="rate-up"><i className="mr-1 fa fa-caret-up">&nbsp;</i>{props.count}</span>
            <span className="comments"><i className="mr-1 fa fa-comment">&nbsp;</i>{props.comments}</span>
          </a>
          <div>
            <h2>
              <a href="">
                {props.title} <em>&nbsp;</em>
              </a>
            </h2>
            <summary>
              <time>{props.time} hours ago</time> by&nbsp;
              <a href="">{props.author}</a>
            </summary>
          </div>
        </article>
      </div>
  )
}

class Lists extends Component {

  render() {
    return (
      <div className="col-12 col-lg-6">
        <NewsItem count={203} comments={139} time={8} title={"Andy Rubin Puts Essential Up for Sale, Cancels Next Phone (bloomberg.com)"} author={"coloneltcb"} />
      </div>
    );
  }
}

export default Lists;
