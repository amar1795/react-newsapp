import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      let {title,description,ImageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={!ImageUrl?"https://images.barrons.com/im-802115/social":ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-primary">Read Full Article</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
