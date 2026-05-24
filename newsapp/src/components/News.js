import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
 
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=516e919071dc46b58db77d7ba6660fa3";
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>News Monkey</h2>

        <div className='row'>
         {this.state.articles.map((element)=>{
          return <div className='col-md-3' key={element.url} >

        <NewsItems title={element.title.slice(0,44)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsurl={element.url}/>
        </div>
        })}
        
       
        </div>
        
      </div>
    )
  }
}

export default News
