import React, { Component } from 'react'
import ArticleList from '../Articles/ArticlesList'
import LeftNav from '../LeftNav'
import Banner from '../Banner'
import './archives.css'
import { fetchArticlesByKeyword, fetchArticlesByArchives } from '../store/actions'
import { connect } from 'react-redux' 

class Archives extends Component {

  componentDidMount () {
    const type = this.props.match.params.type
    const keyword = this.props.match.params.keyword
    const { dispatch } = this.props
    if (keyword) {
      dispatch(fetchArticlesByKeyword(keyword))
      this.setState({
        isSearch: true
      })
    }
    type && dispatch(fetchArticlesByArchives(type))
  }

  componentWillUpdate (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const type = nextProps.match.params.type
      const keyword = nextProps.match.params.keyword
      const { dispatch } = this.props
      if (keyword) {
        dispatch(fetchArticlesByKeyword(keyword))
        this.setState({
          isSearch: true
        })
      }
      type && dispatch(fetchArticlesByArchives(type))
    }
  }

  render () {
    const { articles } = this.props
    const keyword = this.props.match.params.keyword
    return (
      <div className="archives">
        {
          !!keyword ? <Banner /> : ''
        }
        <div className="archives-container">
          {
            !!keyword && articles.length === 0 ? <p className="empty">抱歉，您要的内容似乎没有哦，不如换个关键字试试吧。</p> : <ArticleList articlesList={articles} />
          }
        <LeftNav />
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

export default connect(mapStateToProps)(Archives)
