import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import routers from '../router'
import './header.css'

export default class Header extends Component {

  constructor () {
    super()
    this.state = {
      className: 'nav-lists'
    }
    this.handleNavListVisible = this.handleNavListVisible.bind(this)
  }

  handleNavListVisible (event) {
    this.setState(prevState => {
      let className = 'nav-lists'
      className = prevState.className === className ? `${className} visible` : className
      return {
        className
      }
    })
  }

  render () {

    const navConfig = routers.filter(router => router.isNav)
    const { className } = this.state
    return (
      <div className="header">
        <div className="avatar">
          <NavLink to="/about">
            <img src="//ofl49b399.bkt.clouddn.com/1.jpg" alt="头像" />
          </NavLink>
        </div>
        <nav>
          <div className="nav-bread" onClick={this.handleNavListVisible}>
            <i className="fa fa-navicon"></i>
          </div>
          <ul className={className}>
            {
             navConfig.map((router, index) => (
              <li className="nav-item" key={index}><NavLink exact={router.path==='/'} activeClassName="navlink-active" to={router.path}>{router.name}</NavLink></li>
             ))
            }
          </ul>
        </nav>
      </div>
    )
  }
}