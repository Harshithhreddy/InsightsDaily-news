import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class NewsComp extends Component {
    static defaultProps={
        country:"in",
        pageSize:8,
        category:"general",

    }

     PropTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        // console.log("hello i am a construvtor ")
        this.state = {
            articles:[],
            loading:false,
            page : 1
        }
        document.title= this.props.category!=="general"?`${this.capitalizeFirstLetter(this.props.category)} - InsightsDaily` :"Home - InsightsDaily"
    }
    
    async componentDidMount(){
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
        
        this.setState({loading:true})
        let data= await fetch(url);
        this.props.setProgress(40);
        let parsedData=await data.json();
        this.props.setProgress(70);

        // console.log(parsedData);
        this.setState({articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false

        })
        this.props.setProgress(100);
    }

    handleNext = async() =>{
        // console.log("next")
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading:false

        });
        this.props.setProgress(100);
        // console.log(this.state.page);
    }
    
    handlePrev = async() =>{
        // console.log("prev")
        this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        });
        this.props.setProgress(100);
        // console.log(this.state.page);
    }
    
    render() {
        let {heading,subheading} =this.props
        return (
            <div className='container '>
                <h1 className="text-center" style={{marginTop:'70px'}}> {heading}</h1>
                <h6  disabled={heading="InsightsDaily - Topstories"} className="text-center mb-2">{subheading}</h6>
                <div className="text-center" >
                {this.state.loading && <Spinner/>}
                </div>
                <div className="row">
                   {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <Newsitems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
                    </div>      
                    
                   })}
            </div>
            <div className="container d-flex justify-content-around mb-3">
            <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
            <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/18)} className="btn btn-dark" onClick={this.handleNext}>Next &rarr;</button>
            </div>
        </div >
    )
    }
}
