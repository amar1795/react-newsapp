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

    capitalizeFirstLetter= (string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);

    }

    
        
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1 
          
        }

        document.title=`${this.capitalizeFirstLetter(this.props.category)}-News Monkey`

        
        
    }
    
    async UpdateNews(){

      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4136a686f9784b0cae639181c30d9814&page=1&pagesize=${this.props.pagesize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData)
      this.setState({loading:false})
      this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})

    }

    async componentDidMount(){
    
      this.UpdateNews();
    }

    
    handlePreviousClick =async()=>{
      
       await this.setState({page:this.state.page+1})

        this.UpdateNews();
      
    }

    handleNextClick =async()=>{
     
      await this.setState({page:this.state.page+1})

      this.UpdateNews();

      
    }

  

  render() {

    
 
    return (
      <div className='container my-3' >
    <h1 className='text-center my-4' style={{margin:"30px 0px"}}>NewsMonkey - TOP HEADLINES for <span style={{color:"red"}}>{this.capitalizeFirstLetter(this.props.category)}</span> category
    </h1> 
    <div className="text-center my-4">
    {this.state.loading && <Spinner/>}
    </div>  
    <div className='row'>
      {!this.state.loading && this.state.articles.map((element)=>{
       return  <div className='col-md-4 my-3' key={element.url}>
        <NewsItem title={element.title.slice(0,44)} description={element.description?.slice(0,88)} newsUrl={element.url} ImageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/> 
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
