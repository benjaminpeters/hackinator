import React, { Component } from "react";
import "./NewsItems.css";
import ArticlePreview from '../components/ArticlePreview';

class Lists extends Component {

  constructor(props) {
   super(props);
   this.handleMouseEnter = this.handleMouseEnter.bind(this);
   this.timer = null;

   this.state = {
     stories:[],
   }
  }

  formattDate(d){
    let date = d;
    let cdate = (new Date(date)).toString();
    return cdate;
  }

  handleMouseEnter(s,e){
    let currentTargetRect = e.currentTarget.getBoundingClientRect();
    e.persist();

    this.timer = setTimeout(function(){
      let midpoint = window.innerHeight/2;

      if (midpoint < e.pageY){
        s.y = -242;
      }
      else {
        s.y = 24;
      }
      s.hover = true;
      s.x = e.pageX - currentTargetRect.left;
      this.setState(s); }.bind(this), 1000);
  }

  handleMouseExit(s){
    clearTimeout(this.timer);
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
         onMouseLeave={this.handleMouseExit.bind(this, s)}>

         {
           s.hover &&
           <ArticlePreview s={s}/>
         }

          <div className="list">
            <article className="d-flex">
              <a href="">
                <span className="rate-up"><i className="mr-1 fa fa-caret-up">&nbsp;</i>{s.score}</span>
                <span className="comments"><i className="mr-1 fa fa-comment">&nbsp;</i>{s.descendants}</span>
              </a>
              <div>
                <h2>
                  <a href={s.url} target="_blank" onMouseEnter={this.handleMouseEnter.bind(this, s)}>
                    {s.title} <em>&nbsp;</em>
                  </a>
                </h2>
                <summary>
                  <time>{this.formattDate(s.time)}</time> by&nbsp;
                  <a href="">{s.author}</a>
                </summary>
              </div>
            </article>
          </div>
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
