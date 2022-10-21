import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

export default class GithubPopularRepos extends Component {
  state = {
    selectedRepoLanguageId: 'ALL',
    popularRepoListForSelectedLanguage: [],
  }

  onRepoLanguageSelect = (repoLanguageId, popularRepoList) =>
    this.setState({
      selectedRepoLanguageId: repoLanguageId,
      popularRepoListForSelectedLanguage: popularRepoList,
    })

  render() {
    const {
      selectedRepoLanguageId,
      popularRepoListForSelectedLanguage,
    } = this.state

    return (
      <div className="github-popular-repos-bg-container">
        <h1 className="github-popular-repos-header">Popular</h1>
        <ul className="github-repo-language-list">
          {languageFiltersData.map(languageFiltersDataItem => (
            <LanguageFilterItem
              key={languageFiltersDataItem.id}
              itemData={languageFiltersDataItem}
              itemClickHandler={this.onRepoLanguageSelect}
              isSelected={languageFiltersDataItem.id === selectedRepoLanguageId}
            />
          ))}
        </ul>
        <ul className="github-repo-list">
          {popularRepoListForSelectedLanguage.map(popularRepoListItem => (
            <RepositoryItem
              key={popularRepoListItem.id}
              itemData={popularRepoListItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
