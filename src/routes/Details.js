import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start"
        }}>
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            style={{
              width: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
            }}
          />
          <div>
            <h1>{movie.title}</h1>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
            <p>{movie.description_full}</p>
            <ul style={{
              listStyle: "none",
              padding: 0,
              marginTop: "10px",
              display: "flex",
              gap: "10px"
            }}>
              {movie.genres.map((genre) => (
                <li key={genre} style={{
                  background: "#ddd",
                  borderRadius: "5px",
                  padding: "5px 10px"
                }}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
