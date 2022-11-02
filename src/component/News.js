import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
      constructor() {
        super();
        console.log("hello i am a constructor");
        this.state = {
          articles: [],
          loading: false,
          page:1
        }
      }
     
      async componentDidMount(){
        let url = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8565e8fd3a5c47ed8f88fbcc68cac138&page=1';
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
      }

     

    render() {
        return (
            <div className='container my-3'>
                <h2>DailyNews  - Top Headlines</h2>

                <div className='row'>
                {this.state.articles.map((element)=>{
                  return <div className='col-md-4' key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,88):""}
                            imageurl={element.urlToImage} newsUrl={element.url} />
                    </div>
                    })}
                </div>
                    
            </div>
        )
    }
}

export default News