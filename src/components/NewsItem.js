import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
      let {title,description}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src="https://sportshub.cbsistatic.com/i/r/2023/06/15/cbc4c602-2055-4994-9591-73f388ad5a18/thumbnail/1200x675/10b5ed7c77bc50e67db8f8888f163c43/us-open-hill-sign-p3-g.png" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="/news" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
