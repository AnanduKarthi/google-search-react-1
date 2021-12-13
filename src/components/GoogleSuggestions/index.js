import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    inputText: '',
  }

  updateSearchInput = value => {
    this.setState({
      inputText: value,
    })
  }

  inputChange = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(inputText.toLowerCase()),
    )
    return (
      <div className="full-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-image"
          />
          <div className="search-full-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
              <input
                type="search"
                placeholder="search google"
                className="input-class"
                onChange={this.inputChange}
                value={inputText}
              />
            </div>

            <ul className="suggestion-container">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  Items={eachItem}
                  key={eachItem.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
