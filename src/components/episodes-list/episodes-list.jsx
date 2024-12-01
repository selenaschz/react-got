import episodes from "../../data/episodes.json"
import Episode from "../episode/episode";

function EpisodesList( { season, searchText = "" }) {
    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center ">
            {episodes
                .filter( e => season === e.season )
                .filter ( e => e.name.toLowerCase().includes( searchText.toLowerCase() ))
                .map( e => (
                    <Episode key={e.id} {...e} image={e.image.medium}/>
                ))}
        </div>
    )
}

export default EpisodesList;