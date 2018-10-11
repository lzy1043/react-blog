import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './left-nav.css'
import moment from 'moment'
import { connect } from 'react-redux'
import { fetchCategorys, fetchTags } from '../store/actions'

class LeftNav extends Component {
  constructor () {
    super()
    this.state = {
      category: [],
      tags: [],
      keyword: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  formatDate (time) {
    return moment(time).format('YYYY-MM-DD')
  }

  componentDidMount () {
    const { dispatch } = this.props
    dispatch(fetchCategorys())
    dispatch(fetchTags())
  }

  handleInputChange (e) {
    this.setState({
      keyword: e.target.value
    })
  }

  render () {
    const { keyword } = this.state
    const { category, tags, articles } = this.props
    const tmpArticles = articles.slice(0, 4)
    return (
      <div className="left-nav">
        <div className="lt-search">
          <input className="lt-search-box lt-search-item" name="keyword" value={keyword} placeholder="搜索..." onChange={this.handleInputChange}/>
          <button className="lt-search-btn lt-search-item"><Link to={`/search/${keyword}`}><i className="fa fa-search"></i></Link></button>
        </div>
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
                  <Link to={`/archive/${item.name}`} >{item.name}</Link>
                  <span className="ln-count">（{item.count}）</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="lt-item">
          <h3 className="ln-item-title">最新文章</h3>
          <ul className="ln-list ln-articles-list">
            {
              tmpArticles && tmpArticles.map((item, index) => (
                <li className="ln-articles-item" key={index}>
                  <Link to={`/article/${item['_id']}`} className="ln-article-link">
                    <div className="ln-article-thumb">
                      <img alt="bg" src={`${item.bg}?imageMogr2/thumbnail/80x/blur/1x0/quality/75`} />
                    </div>
                    <div className="ln-article-info">
                      <p className="ln-article-title">{item.title}</p>
                      <p className="ln-article-time">{this.formatDate(item.date)}</p>
                    </div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="lt-item">
          <h3 className="ln-item-title">标签</h3>
          <div className="ln-list ln-tags-list">
            {
              tags && tags.map((tag, index) => (
              <span className="ln-tag-item" key={index}>{tag.name}</span>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(LeftNav)
