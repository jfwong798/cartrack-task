import React, { Component } from 'react'

class InputSearch extends Component {
  handleChange = e => {
    this.props.onSearch(e.target.value)
  }

  render() {
    const { isLoading, notFound } = this.props

    return (
      <div className="search-input">
        <div style={{ position: 'relative' }}>
          <input
            type="search"
            placeholder="Enter Search Key..."
            autoFocus
            onChange={this.handleChange}
          />
        </div>
        {!isLoading && notFound && (
          <div className="search-result-text">No Data Found!</div>
        )}
      </div>
    )
  }
}

export default InputSearch
