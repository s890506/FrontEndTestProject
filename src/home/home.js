import React, { Component } from 'react'
import Button from '../components/button'
import NameCard from '../components/nameCard'
import { Helmet } from 'react-helmet'
import './css/home.min.css'

class index extends Component {
  constructor (props) {
    super(props)
    this.handleAddUser = this.handleAddUser.bind(this)
    this.state = {
      user: [{
        'name': 'Tom',
        'age': 19,
        'country': 'Taiwan'
      }, {
        'name': 'John',
        'age': 25,
        'country': 'Korea'
      }, {
        'name': 'Miya',
        'age': 10,
        'country': 'China'
      }, {
        'name': 'Vincent',
        'age': 30,
        'country': 'United State'
      }, {
        'name': 'David',
        'age': 35,
        'country': 'Hong Kong'
      }, {
        'name': 'Vicky',
        'age': 18,
        'country': 'Japan'
      }, {
        'name': 'Alice',
        'age': 22,
        'country': 'United Kingdom'
      }, {
        'name': 'Ann',
        'age': 28,
        'country': 'Australia'
      }]
    }
  }

  handleAddUser () {
    const newUser = {
      'name': 'New User',
      'age': 100,
      'country': 'New Country'
    }
    this.setState(prevState => ({
      user: [...prevState.user, newUser]
    }))
  }

  render () {
    let nameCardElement = []

    nameCardElement = this.state.user.map((user, i) => {
      return (
        <NameCard
          key={i}
          name={user.name}
          age={user.age}
          country={user.country} />
      )
    })

    return (
      <section className='section-home container'>
        <Helmet>
          <title>
            Front-End Test
          </title>
        </Helmet>
        <div className='row'>
          <div className='col-md-2 panel-body'>
            <Button type='button' onClick={this.handleAddUser} inputClasses={{ 'btn btn-info btn-block': true }}>
              Add User
            </Button>
          </div>
        </div>
        <div className='row'>
          {nameCardElement}
        </div>
      </section>
    )
  }
}

export default index
