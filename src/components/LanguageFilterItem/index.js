import './index.css'

const LanguageFilterItem = props => {
  const {itemData, itemClickHandler, isSelected} = props
  const {id, language} = itemData

  const onLanguageFilterSelect = () => itemClickHandler(id)

  return (
    <button
      type="button"
      className={`language-filter-item-container ${
        isSelected && 'selected-language'
      }`}
      onClick={onLanguageFilterSelect}
    >
      {language}
    </button>
  )
}

export default LanguageFilterItem
