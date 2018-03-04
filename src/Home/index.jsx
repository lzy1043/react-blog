import React, { Component } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../config'
import ArticleList from '../Articles/ArticlesList'
import LeftNav from '../LeftNav'
import Banner from '../Banner'
import './home.css'

export default class Home extends Component {

  constructor () {
    super()
    this.state = {
      articlesList: []
    }
  }

  componentDidMount () {
    axios.get(`${API_BASE_URL}/article?page=1`)
      .then(res => {
        if (res.data && res.data.code === 0) {
          const data = res.data.data
          this.setState({
            articlesList: data
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
  }

  render () {
    const { articlesList } = this.state
    return (
      <div className="home">
        <Banner />
        <div className="home-wrapper">
          <ArticleList articlesList={articlesList} />
          <LeftNav />
        </div>  
      </div>
    )
  }
}