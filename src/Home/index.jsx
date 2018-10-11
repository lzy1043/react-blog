import React, { Component } from 'react'
import ArticleList from '../Articles/ArticlesList'
import LeftNav from '../LeftNav'
import Banner from '../Banner'
import Pagination from '../Pagination'
import './home.css'
import { fetchArticles } from '../store/actions'
import { connect } from 'react-redux'

class Home extends Component {

  constructor () {
    super()
    this.state = {
      currentPage: 1,
      count: 0
    }
  }

  componentDidMount () {
    const page = this.props.match.params.page || 1
    this.setState({
      currentPage: page
    })
    const { dispatch } = this.props
    dispatch(fetchArticles(page))
  }

  componentWillUpdate (nextProps) {
    const { dispatch } = this.props
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const page = nextProps.match.params.page
      this.setState({
        currentPage: page
      })
      dispatch(fetchArticles(page))
    }
  }
  render () {
    const { currentPage, count } = this.state
    const { articles } = this.props
    return (
      <div className="home">
        <Banner />
        <div className="home-wrapper">
          <ArticleList articlesList={articles} />
          <LeftNav />
        </div>
        <Pagination page={currentPage} count={count} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { articles } = state
  return {
    articles
  }
}

export default connect(mapStateToProps)(Home)
