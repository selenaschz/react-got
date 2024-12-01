function SearchBar( { searchText, onSearch }) {
    return (
        <>
            <input 
                value={searchText}
                onChange={(event) => {
                    onSearch( event.target.value );
                }}
                type="text" 
                placeholder="Season" 
                className="form-control" />
        </>
    )
}

export default SearchBar;