import MainPage from "../components/MainPage"
import RegisterComponent from "../components/RegisterComponent"
import SearchPage from "../components/SearchPage"


export type Pages = 'Main' | 'Register' | 'Search'

export function getPageComponent(currentPage: Pages, changePage: (page: Pages) => void): JSX.Element {
  if (currentPage == 'Main') {
    return MainPage({ onChangePage: changePage })
  } else if (currentPage == 'Register') {
    return RegisterComponent()
  } else if (currentPage == 'Search') {
    return SearchPage()
  }

  return MainPage({ onChangePage: changePage })
}
