import React, { Component } from 'react'
import axios from 'axios'
import './left-nav.css'

export default class LeftNav extends Component {
  constructor () {
    super()
    this.state = {
      category: [],
      tags: []
    }
  }

  fetchCategories () {
    axios.get('http://liuziyang.top/api/category/info')
      .then(response => {
        if (response.data.code === 1) {
          this.setState({
            category: response.data.data
          })
        }
      })
      .catch (e => {
        console.log(e)
      })
  }

  fetchTags () {
    axios.get('http://liuziyang.top/api/category')
      .then(response => {
        if (response.data.code === 0) {
          this.setState({
            tags: response.data.data.tags
          })
        }
      })
      .catch (e => {
        console.log(e)
      })
  }

  componentDidMount () {
    this.fetchCategories()
    this.fetchTags()
  }

  render () {
    const { category, tags } = this.state
    return (
      <div className="left-nav">
        <div className="lt-item">
          <h3 className="ln-item-title">简介</h3>
          <p className="ln-item-descp">记录工作和学习中一些日常</p>
        </div>
        <div className="lt-item">
          <h3 className="ln-item-title">分类</h3>
          <ul className="ln-list ln-category-list">
            {
              category && category.map((item, index) => (
                <li className="ln-category-item" key={index}>
                  <span>{item.name}</span>
                  <span className="ln-count">（{item.count}）</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="lt-item">
          <h3 className="ln-item-title">最新文章</h3>
        </div>
        <div className="lt-item">
          <h3 className="ln-item-title">标签</h3>
          <div className="ln-list ln-tags-list">
            {
              tags && tags.map(tag => (
              <span className="ln-tag-item">{tag.name}</span>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}
