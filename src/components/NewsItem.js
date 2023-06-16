import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
      let {title,description,ImageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={!ImageUrl?"https://cdn.vox-cdn.com/thumbor/8SnDNCGh3gf6kxFZnIrHIA-YwWw=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24728513/236676_09_smart_home_privacy_security_questions_explained_SHaddad.jpg":ImageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={newsUrl} target="_blank"className="btn btn-primary">Read Full Article</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
