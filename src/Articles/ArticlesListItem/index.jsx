import React, { Component } from 'react'
import moment from 'moment'
import lang from 'moment/locale/zh-cn'
import './article-list-item.css'

moment().locale('zh-cn', lang)

export default class ArticlesListItem extends Component {
  formatDate (format, time) {
    return moment(time).format(format)
  }

  randomPic () {
    return Math.floor(Math.random() * 20)
  }

  render() {
    const BASE_URL = `url(//ozft0883x.bkt.clouddn.com/${this.randomPic()}.jpg?imageMogr2/thumbnail/700x/blur/1x0/quality/75)`
    const divStyle = {
      backgroundImage: BASE_URL,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
     <li className="article-item-container" key={this.props.articlesItem['_id']}>
        <div className="article-item">
          <div className="article-pic" style={divStyle}>
            <div className="article-time">
              <span className="time-day">{this.formatDate('D', this.props.articlesItem.date)}</span>
              <span className="time-month">{this.formatDate('Mo', this.props.articlesItem.date)}</span>
            </div>
          </div>
          <div className="article-content">
            <h3 className="article-title">{this.props.articlesItem.title}</h3>
            <p className="article-author"><span className="author-by">by</span>胖先生</p>
            <div className="article-descp">{this.props.articlesItem.description}</div>
            <p className="article-category"><i className="fa fa-tag"></i><span className="article-category-text">{this.props.articlesItem.category}</span></p>
          </div>
        </div>
      </li>
    );
  }
}
