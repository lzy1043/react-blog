import React, { Component } from 'react'
import LeftNav from '../../LeftNav'
import '../../assets/markdown.css'
import '../../assets/github.css'
import './article-detail.css'
import { fetchCurrentArticleContent } from '../../store/actions'
import { connect } from 'react-redux'

class ArticleDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      articleDetail: ''
    }
  }

  componentDidMount () {
    const articleId = this.props.match.params.id
    const { dispatch } = this.props
    dispatch(fetchCurrentArticleContent(articleId))
  }

  componentWillUpdate (nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const articleId = nextProps.match.params.id
      const { dispatch } = this.props
      dispatch(fetchCurrentArticleContent(articleId))
    }
  }

  render() {
    const { content } = this.props
    
    const html = content ? {__html: content.htmlcont} : {__html: ''}
    return (
      <div className="article-detail">
        {
          content && (
            <div className="ad-wrapper">
              <img className="ad-pic" src={content && content.bg} alt="bg" />
              <div className="markdown-body" dangerouslySetInnerHTML={html}></div>
            </div>
          )
        }
        <LeftNav />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { content } = state
  return {
    content
  }
}

export default connect(mapStateToProps)(ArticleDetail)