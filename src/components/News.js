import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps ={
        country:'in',
        pageSize:5,
        category:'general',  
    }

    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }

    constructor() {
        super();
        console.log("hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1 
        }
    }
    async componentDidMount() { 
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2a9b576169f48d49739a961d1b1b6b8&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log(`hello world`);
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2a9b576169f48d49739a961d1b1b6b8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData) ;
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles
            })
        }
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f2a9b576169f48d49739a961d1b1b6b8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }

    render() {
        return (
            <div className='container my-5'>
                <h1 className='text-center my-5'>Daily News - {this.props.category}</h1>
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-4 my-2' key={element.url}>
                            <NewsItem key={element.url} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr; previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-dark "> Next &rarr; </button>
                </div >
            </div>
        )
    }
}

