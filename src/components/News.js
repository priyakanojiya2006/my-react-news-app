import React, { Component } from 'react'
import { Newsitem } from './Newsitem'


export default class news extends Component {
  articles = []



  constructor() {
    super();
    this.state = {
      articles: [],
     loading: true,
      page:1
      
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=01493a2e78634aeab1338ca3eb7ac056&page=1&pageSize=20";
    let data = await fetch(url);
    let parseData= await data.json()
    this.setState({articles:parseData.articles ,totalResults:parseData.totalResults})
  }

   
  pre=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=01493a2e78634aeab1338ca3eb7ac056&page=${this.state.page - 1}&pageSize=20`;
    let data =await fetch(url);
    let parseData=await data.json()
   this.setState({
    page:this.state.page-1,
    articles:parseData.articles
   })
    }
      
  next=async()=>{
    if (this.state.page+1>Math.ceil(this.state.totalResults/20)){
    }
    else {
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=01493a2e78634aeab1338ca3eb7ac056&page=${this.state.page + 1}&pageSize=20`;
    let data =await fetch(url);
    let parseData=await data.json()
   this.setState({
    page:this.state.page+1,
    articles:parseData.articles
   })
    }
  }

  

   
  
  render() {
    return (

      <div className="container mx-5 my-3">
        <h1>NewsAbout--Top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} url={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
          </div>
          <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1}type="button"class="btn-btn-dark"
            onClick={this.pre}>&larr; Previous</button>
         <button type="button" className="btn-btn-dark"onClick={this.next}>next &rarr;</button>

         </div>
        </div>
    







    )
  }
}

