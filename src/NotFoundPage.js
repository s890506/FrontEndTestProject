import React from 'react'
import { Helmet } from 'react-helmet'

class NotFoundPage extends React.Component {
  render () {
    return (
      <section className='container'>
        <Helmet>
          <title>
            No Such Page
          </title>
        </Helmet>
        <h1 className='page-header'>No Such Page</h1>
        <p>
          We're sorry to inform you that this page does not exist.
        </p>
      </section>
    )
  }
}

export default NotFoundPage
