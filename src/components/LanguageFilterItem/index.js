import './index.css'

const LanguageFilterItem = props => {
  const {itemData, itemClickHandler, isSelected} = props
  const {language} = itemData

  return (
    <button
      type="button"
      className={`language-filter-item-container ${
        isSelected && 'selected-language'
      }`}
      onClick={itemClickHandler}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
