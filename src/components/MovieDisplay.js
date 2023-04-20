

function MovieDisplay(props) {
    const { movie } = props;
    if(movie?.Error){
        return <h3>Movie not found</h3>
    }

    const loaded = () => {
        return (
            <div style={{marginLeft: '16.25%'}}>
                <h4>{movie.Title} ({movie.Year})</h4>
                <strong>Box Office: {movie.BoxOffice}</strong>
                <br />
                <img src={movie.Poster} alt={movie.Title} />
            </div>
        )
    }

    const loading = () => <h1>No Movie to Display</h1>

    return movie ? loaded() : loading()
}

export default MovieDisplay