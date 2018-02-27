import React, { Component } from 'react'
import axios from 'axios'
import ArticlesListItem from '../ArticlesListItem'
import './article-list.css'

export default class ArticlesList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      articlesList: []
    }
  }

  componentDidMount () {
    axios.get('http://liuziyang.top/api/article?page=1')
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

  render() {
    const { articlesList } = this.state
    return (
     <div className="articles-list-container">
      <ul className="articles-list">
        {
          articlesList && articlesList.map(item => (
            <ArticlesListItem key={item['_id']} articlesItem={item} />
          ))
        }
      </ul>
     </div>
    );
  }
}
