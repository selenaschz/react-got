import { useState } from "react";
import Header from "./components/header/header"
import SeasonFilter from "./components/season-filter/season-filter"
import EpisodesList from "./components/episodes-list/episodes-list";

function App() {
  const [season, setSeason] = useState(1)
  // const [search, setSearch] = useState()

  const onFilter = (season) => {
    setSeason(season);
    console.log("Season filter:", season)
  }

  return (
    <>
      <Header />

      <main className="container mt-3">
        <SeasonFilter season={season} onFilter={onFilter} />
        <EpisodesList season={season} />
      </main>
    </>
  )
}

export default App
