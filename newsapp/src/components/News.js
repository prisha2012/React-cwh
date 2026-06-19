import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR_API_KEY&page=1";

    let response = await fetch(url);
    let parsedData = await response.json();

    this.setState({
      articles: parsedData.articles,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItems
                  title={element.title?.slice(0, 44)}
                  description={element.description?.slice(0, 88)}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary" type="submit">Button</button>
        <button className="btn btn-primary" type="submit">Button</button>

      </div>
    );
  }
}

export default News;