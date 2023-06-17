import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pagesize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Monkey`;
  }

  async componentDidMount() {
    this.updateNews();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateNews = async () => {
    const { country, category, pagesize } = this.props;
    const { page, articles } = this.state;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4136a686f9784b0cae639181c30d9814&page=${page}&pagesize=${pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState((prevState) => ({
      articles: [...prevState.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false,
    }));
  };

  handleScroll = () => {
    const { loading, totalResults, page } = this.state;
    if (loading || page >= Math.ceil(totalResults / this.props.pagesize)) return;

    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      this.loadMoreNews();
    }
  };

  loadMoreNews = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.updateNews();
      }
    );
  };

  render() {
    const { articles, loading } = this.state;

    return (
      <div className="container my-3">
        <h1 className="text-center my-4" style={{ margin: '30px 0px' }}>
          NewsMonkey - TOP HEADLINES for{' '}
          <span style={{ color: 'red' }}>{this.capitalizeFirstLetter(this.props.category)}</span>{' '}
          category
        </h1>
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4 my-3" key={element.url}>
              <NewsItem
                title={element.title.slice(0, 44)}
                description={element.description?.slice(0, 88)}
                newsUrl={element.url}
                ImageUrl={element.urlToImage}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        {loading && (
          <div className="text-center my-4">
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default News;
