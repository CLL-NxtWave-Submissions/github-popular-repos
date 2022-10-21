import './index.css'

const RepositoryItem = props => {
  const {itemData} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = itemData

  return <li className="repository-item-bg-container"></li>
}
