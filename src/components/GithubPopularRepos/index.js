import {Component} from 'react'
import Loader from 'react-loader-spinner'

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
    isLoadingRepoData: true,
  }

  componentDidMount() {
    this.onRepoLanguageSelect()
  }

  onRepoLanguageSelect = async repoLanguageId => {
    this.setState(async prevPopularRepoState => {
      const {isLoadingRepoData} = prevPopularRepoState

      if (!isLoadingRepoData) {
        this.setState({
          isLoadingRepoData: true,
        })
      }

      const repoDataFetchUrlString = `https://apis.ccbp.in/popular-repos?language='${repoLanguageId}`
      // let repoDataFetchUrlInstance = new URL(repoDataFetchUrlString)
      // repoDataFetchUrlInstance.
      const repoDataResponse = await fetch(repoDataFetchUrlString)
      const repoData = await repoDataResponse.json()
      const popularRepoList = repoData.popular_repos

      return {
        selectedRepoLanguageId: repoLanguageId,
        popularRepoListForSelectedLanguage: popularRepoList,
        isLoadingRepoData: false,
      }
    })
  }

  render() {
    const {
      selectedRepoLanguageId,
      popularRepoListForSelectedLanguage,
      isLoadingRepoData,
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
        {isLoadingRepoData ? (
          <div>
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="github-repo-list">
            {popularRepoListForSelectedLanguage.map(popularRepoListItem => (
              <RepositoryItem
                key={popularRepoListItem.id}
                itemData={popularRepoListItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
