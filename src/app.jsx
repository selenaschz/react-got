import { useState } from "react";
import Header from "./components/header/header"
import SeasonFilter from "./components/season-filter/season-filter"
import EpisodesList from "./components/episodes-list/episodes-list";
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [season, setSeason] = useState(1)
  const [searchText, setSearchText] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const onFilter = (season) => {
    setSeason(season);
    console.log("Season filter:", season)
  }

  const displaySearch = () => {
    setShowSearch(!showSearch);
  }

  const onSearch = (value) => {
    setSearchText(value)
  }

  return (
    <>
      <Header />

      <main className="container mt-3 d-flex flex-column gap-3">
        <button className="btn btn-dark btn-sm mb-2" onClick={displaySearch} style={{width: "150px"}}> Show Search bar </button>
          {showSearch && (
            <SearchBar searchText={searchText} onSearch={onSearch}/>
          )}
        
        <SeasonFilter season={season} onFilter={onFilter} />
        
        <EpisodesList season={season} searchText={searchText} />
      </main>
    </>
  )
}

export default App
