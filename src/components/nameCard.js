import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  country: PropTypes.string
}
const defaultProps = {
  name: '',
  age: 0,
  country: ''
}

class NameCard extends React.Component {
  render () {
    return (
      <div className='col-sm-3'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>{this.props.name}</h3>
          </div>
          <div className='panel-body'>
            <p>
              <b><i className='fa fa-user' /> Age</b>
              &nbsp;
              {this.props.age}
            </p>
            <p>
              <b><i className='fa fa-globe' /> Country</b>
              &nbsp;
              {this.props.country}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

NameCard.propTypes = propTypes
NameCard.defaultProps = defaultProps

export default NameCard
