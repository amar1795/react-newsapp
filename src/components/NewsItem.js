import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      let {title,description,ImageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={!ImageUrl?"https://images.barrons.com/im-802115/social":ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
          {source}

          </span>
          </h5>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on{new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-primary">Read Full Article</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
