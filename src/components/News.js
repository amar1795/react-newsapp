import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from "./Spinner"
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country:'us',
    pagesize:8,
  }

  static propTypes ={
    country: PropTypes.string,
    pagesize:PropTypes.number,
  }

  

    articles=[ ]
        
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false,
            page:1 //current state

        }
        
    }

    async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=1&pagesize=${this.props.pagesize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData)
      this.setState({loading:false})
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }

    
    handlePreviousClick =async()=>{
      
        console.log("Previous click");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({loading:false})
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
     
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      this.setState({loading:false})
      this.setState({
        articles:parsedData.articles,
        page:this.state.page+1
      })
    }

    }



  render() {

    
 
    return (
      <div className='container my-3' >
    <h1 className='text-center my-4' style={{margin:"30px 0px"}}>NewsMonkey - TOP HEADLINES</h1> 
    <div className="text-center my-4">
    {this.state.loading && <Spinner/>}
    </div>  
    <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
       return  <div className='col-md-4 my-3' key={element.url}>
        <NewsItem title={element.title.slice(0,44)} description={element.description?.slice(0,88)} newsUrl={element.url} ImageUrl={element.urlToImage}/> 
        </div>
      })}
       </div>   
       <div className="container d-flex justify-content-between my-3 ">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>  

    </div>
    
    )
  }
}

export default News
