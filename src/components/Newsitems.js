import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" >
                    <img src={imageUrl === null ? "https://fdn.gsmarena.com/imgroot/news/24/07/samsung-health-family-tracking/-952x498w6/gsmarena_000.jpg" : imageUrl} className="card-img-top" alt="..." />
                   
                    <div className="card-body">
                    
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more..</a>
                        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{zIndex:'1'}}>{source}</span>
                    </div>
                </div>
            </div>
        )
    }
}
