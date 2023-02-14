import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                
                <div className="card">
                        <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-success">
                            {source}
                        </span>
                    <img src={!imageUrl ? "https://www.merkur.de/bilder/2022/12/09/91967166/29788308-eroeffnung-tesla-fabrik-berlin-brandenburg-1ZOeSqJUNkfe.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target=" _blank" className="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default NewsItem
