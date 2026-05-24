import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {

    let {
      title,
      description,
      imageurl,
      newsurl
    } = this.props;

    return (

      <div className='my-3'>

        <div className="card" style={{ width: "18rem" }}>

          <img
            src={
              imageurl
                ? imageurl
                : "https://via.placeholder.com/300"
            }
            className="card-img-top"
            alt="news"
          />

          <div className="card-body">

            <h5 className="card-title">
              {title ? title.slice(0, 45) : ""}
            </h5>

            <p className="card-text">
              {description
                ? description.slice(0, 88)
                : ""}
            </p>

            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Read More
            </a>

          </div>
        </div>

      </div>
    )
  }
}

export default NewsItems