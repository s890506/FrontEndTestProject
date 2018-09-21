import React, { Component } from 'react'
import ClassNames from 'classnames'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

class Default extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navBarOpen: false
    }
  }

  componentWillReceiveProps () {
    this.setState({ navBarOpen: false })
  }

  tabClass (tab) {
    return ClassNames({
      active: this.props.children.props.location.pathname === tab
    })
  }

  toggleMenu () {
    this.setState({ navBarOpen: !this.state.navBarOpen })
  }

  render () {
    const navBarCollapse = ClassNames({
      'navbar-collapse': true,
      collapse: !this.state.navBarOpen
    })

    return (
      <div>
        <div className='navbar navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <Link className='navbar-brand' to='/'>
              <img className='navbar-logo' src='/media/logo-square.png' alt='' />
              <span className='navbar-brand-label'>Front-End Test</span>
              </Link>
              <button className='navbar-toggle collapsed' onClick={this.toggleMenu.bind(this)}>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
            </div>
            <div className={navBarCollapse}>
              <ul className='nav navbar-nav'>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
        <div className='footer'>
          <div className='container'>
            <span className='copyright pull-right'>© {year} Larry Lai</span>
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Default
