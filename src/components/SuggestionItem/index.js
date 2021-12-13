import './index.css'

const SuggestionItem = props => {
  const {Items, updateSearchInput} = props
  const {suggestion} = Items

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="item-container">
      <p className="heading">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
