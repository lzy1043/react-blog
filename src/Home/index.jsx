import React, { Component } from 'react'
import ArticleList from '../Articles/ArticlesList'
import LeftNav from '../LeftNav'
import './home.css'

export default class Home extends Component {
  render () {
    return (
      <div className="home">
        <ArticleList />
        <LeftNav />
      </div>
    )
  }
}