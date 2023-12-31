import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [articles,setarticles]=useState([]);
  const [loading,setloading]=useState(false);
  const [page,setpage]=useState(1);
  const [totalResults,settotalResults]=useState(0);

  
  
    const capitalizeFirstLetter= (string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);

    }
    
    const UpdateNews=async()=>{
      props.setProgress(10);

      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}&page=${page + 1}`
      
      setloading(true);
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(70);
      console.log(parsedData)
      
      setloading(false)
      props.setProgress(100);
      setarticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setloading(false);
     

    }
      useEffect (()=>{
        document.title=`${capitalizeFirstLetter(props.category)}-News Monkey`
        UpdateNews();
        // eslint-disable-next-line
      },[])
    

    const fetchMoreData = async() => {
      // this.setState({})
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+2}&pagesize=${props.pagesize}`
      setpage(page+1);
      
      setloading(true);
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData)
      setloading(true);
      setarticles(parsedData.articles);
      settotalResults(parsedData.totalResults);
      setloading(false);
      

      
      };
    
    // handlePreviousClick =async()=>{
      
    //    await this.setState({page:this.state.page+1})

    //     this.UpdateNews();
      
    // }

    // handleNextClick =async()=>{
     
    //   await this.setState({page:this.state.page+1})

    //   this.UpdateNews();

      
    // }

  

  

    
 
    return (
      <div className='container my-3' >
    <h1 className='text-center my-4' style={{margin:"30px 0px",paddingTop:"82px"}}>NewsMonkey - TOP HEADLINES for <span style={{color:"red"}}>{capitalizeFirstLetter(props.category)}</span> category
    </h1> 
    <div className="text-center my-4">
    {loading && <Spinner/>}
    </div>  

    <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
    <div className='row'>
      {articles.map((element)=>{
       return  <div className='col-md-4 my-3' key={element.url}>
        <NewsItem title={element.title.slice(0,44)} description={element.description?.slice(0,88)} newsUrl={element.url} ImageUrl={element.urlToImage} author={element.author} date={element.publishedAt} source={element.source.name}/> 
        </div>
      })}
       </div>   
      
      </InfiniteScroll>
    </div>
    
    )
  }


News.defaultProps = {
  country:'us',
  pagesize:8,
}

News.propTypes ={
  country: PropTypes.string,
  pagesize:PropTypes.number,
}

export default News
