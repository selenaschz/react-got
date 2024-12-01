import episodes from "../../data/episodes.json"
import Episode from "../episode/episode";

function EpisodesList( { season }) {
    return (
        <div className="d-flex flex-wrap gap-3">
            {episodes
                .filter( e => season === e.season )
                .map( e => (
                    <Episode key={e.id} {...e} image={e.image.medium}/>
                ))}
        </div>
    )
}

export default EpisodesList;