import React, { Component } from "react";
import "./NewsItems.css";
import ArticlePreview from '../components/ArticlePreview';


const NewsItem = (props) => {

  let date = props.time;
  let cdate = (new Date(date)).toString();

  return(
      <div className="list">
        <article className="d-flex">
          <a href="">
            <span className="rate-up"><i className="mr-1 fa fa-caret-up">&nbsp;</i>{props.count}</span>
            <span className="comments"><i className="mr-1 fa fa-comment">&nbsp;</i>{props.comments}</span>
          </a>
          <div>
            <h2>
              <a href={props.url} target="_blank">
                {props.title} <em>&nbsp;</em>
              </a>
            </h2>
            <summary>
              <time>{cdate}</time> by&nbsp;
              <a href="">{props.author}</a>
            </summary>
          </div>
        </article>
      </div>
  )
}

class Lists extends Component {

  constructor(props) {
   super(props);
   this.handleMouseEnter = this.handleMouseEnter.bind(this);

   this.state = {
     stories:[],
   }
  }

  handleMouseEnter(s,e){
    let currentTargetRect = e.currentTarget.getBoundingClientRect();

    s.hover = true;
    s.x = e.pageX - currentTargetRect.left;
    s.y = e.pageY - currentTargetRect.top;
    this.setState(s);
  }

  handleMouseExit(s){
    s.hover = false;
    this.setState(s);
  }

  componentDidMount(){
   const topStories ='https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
   const storyUrlBase ='https://hacker-news.firebaseio.com/v0/item/';


   fetch(topStories)
   .then(data=>data.json())
   .then(data=>data.slice(0, 10).map(id=>{
     const url=`${storyUrlBase}${id}.json`;
     return fetch(url).then(d=>d.json()); //return array
   }))
   .then(promises=>Promise.all(promises))
   .then(stories=>this.setState({stories}));
  }

  render() {
    let views = <div>Loading...</div>;
    const {stories}=this.state;

    if(stories &&  (stories.length>0)){
      views=stories.map(s=>(
        <div className="col-12 col-lg-6" key={s.id}
         onMouseEnter={this.handleMouseEnter.bind(this, s)} onMouseLeave={this.handleMouseExit.bind(this, s)}>

         {
           s.hover &&
           <ArticlePreview s={s}/>
         }

          <NewsItem count={s.score} url={s.url} comments={s.descendants} time={s.time} title={s.title} author={s.by} />
        </div>
      ));
    }

    return (
      <div>
        {views}
      </div>
    );
  }
}

export default Lists;
