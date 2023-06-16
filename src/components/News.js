import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
       
        ]
        
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1
        }
        
    }

    async componentDidMount(){
      let url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4136a686f9784b0cae639181c30d9814&page=1&pagesize=20"
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData)
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

    
    handlePreviousClick =async()=>{
      
        console.log("Previous click");
        let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page-1}&pagesize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({
          articles:parsedData.articles,
          page:this.state.page-1
        })
      
    }

    handleNextClick =async()=>{
      if(this.state.page +1>Math.ceil(this.state.totalResults/20))
      {
        
      }
      else
      {
      console.log("Previous click");
      let url=`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page+1}&pagesize=20`;
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({
        articles:parsedData.articles,
        page:this.state.page+1
      })
    }

    }



  render() {
    return (
      <div className='container my-3' >
    <h2>NewsMonkey - top Headlines</h2>   
    <div className='row'>
      {this.state.articles.map((element)=>{
       return  <div className='col-md-4' key={element.url}>
        <NewsItem title={element.title.slice(0,44)} description={element.description?.slice(0,88)} newsUrl={element.url} ImageUrl={element.urlToImage}/> 
        </div>
      })}
       </div>   
       <div className="container d-flex justify-content-between my-3 ">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  

    </div>
    
    )
  }Name
}

export default News
