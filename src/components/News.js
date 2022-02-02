import React, { Component } from 'react'
import logo from '../logo.svg';
import './News.css'
export class News extends Component {
  constructor() {
    console.log('I am constructor')
    super();
    this.state = {
      // articles: this.articles,
      articles: [],
      page: 2,
      totalArt: '',
      title: 'hi watup',
      imgUrl: '',
      url: '',
      content: ''
    }

  }
  handleClick = (element) => {
    console.log(element.title)
    document.getElementById('all').style.display = 'none'
    document.querySelector('#full').style.display = 'block';

    this.setState({
      title: element.title,
      content: element.content,
      imgUrl: element.urlToImage,
      url: element.url
    })
  }
  handleWeb = () => {
    window.open(this.state.url, '_blank')
  }
  close = () => {
    document.getElementById('all').style.display = 'block';
    document.querySelector('#full').style.display = 'none';
  }
  toggleNext = async ()=>{
    this.setState({
      page: this.state.page+1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e93fbeeed4f14bffafbf5a14d3d2e982&pageSize=12&page=${this.state.page}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
    console.log(this.state.page)
  }
  togglePrev = async ()=>{
    this.setState({
      page: this.state.page-1
    })
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e93fbeeed4f14bffafbf5a14d3d2e982&pageSize=12&page=${this.state.page}`;
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
    console.log(this.state.page)
  }

  async componentDidMount() {
    console.log('I am componentDidMount')
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=e93fbeeed4f14bffafbf5a14d3d2e982&pageSize=12&page=1`;
    let data = await fetch(url)
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalArt: parsedData.totalResults })
    console.log(this.state.page)
  }
  render() {
    return (
      <div>
        <section id='all' className="text-gray-600 my-10 body-font">
          <div className="container px-35 py-4 mx-auto">
            <div className="flex flex-wrap m-4 mx-20 px-10 flex main justify-center">
              {this.state.articles.map((ele) => {
                return <div className="xl:w-1/3 md:w-1/2 p-4" key={ele.url}>
                  <div className="bg-gray-100 p-6 rounded-lg" style={{ boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={ele.urlToImage ? ele.urlToImage : logo} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{ele.title ? ele.title.slice(0, 45) : ""}...</h2>
                    <p className="leading-relaxed descript text-base">{ele.description ? ele.description.slice(0, 80) : ""}..</p>
                    <button onClick={() => { this.handleClick(ele) }} className="py-2 px-4 my-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Read More</button>
                  </div>
                </div>
              })}
            </div>
            <div className="btnus">
              <button onClick={this.togglePrev} disabled={this.state.page <= 2} className=" btnu bg-blue-600 p-3 text-white rounded disabled:bg-blue-400 hover:bg-blue-900">
              &#129060; Previous
              </button>
              <button onClick={this.toggleNext} disabled={this.state.page > Math.ceil(this.state.totalArt/12)} className="btnu bg-blue-600 p-3 text-white rounded disabled:bg-blue-400 hover:bg-blue-900">
                Next &#129062;
              </button>
            </div>
          </div>
        </section>
        <div id="full" style={{ display: 'none' }}>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={this.state.imgUrl} />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{this.state.title}
                </h1>
                <p className="mb-8 leading-relaxed">{this.state.content}</p>
                <div className="flex justify-center">
                  <button onClick={this.handleWeb} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Go to website</button>
                  <button onClick={this.close} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Back Home</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default News
