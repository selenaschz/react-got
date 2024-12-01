function Episode( {image, name, summary, season, number}) {
    return (
        <div className="w-25 p-3">
        <div className="card h-100" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6>S{season} - Episode {number} </h6>
                <p className="card-text">{summary}</p>
            </div>
        </div>
        </div>
    )
}

export default Episode;