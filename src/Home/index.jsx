import React, { Component } from 'react'
import ArticleList from '../Articles/ArticlesList'
import LeftNav from '../LeftNav'
import Banner from '../Banner'
import './home.css'

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <Banner />
        <ArticleList />
        <LeftNav />
      </div>
    )
  }
}