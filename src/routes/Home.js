import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getMovies = async (currentPage) => {
    setLoading(true);
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year&page=${currentPage}`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies(page);
  }, [page]);

  const goToNextPage = () => setPage((prev) => prev + 1);
  const goToPrevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={{ padding: "20px" }}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                year={movie.year}
              />
            ))}
          </div>
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <button 
              onClick={goToPrevPage} 
              disabled={page === 1}
              style={{ margin: "10px", padding: "10px 20px", fontSize: "1rem" }}
            >
              이전
            </button>
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>Page {page}</span>
            <button 
              onClick={goToNextPage} 
              style={{ margin: "10px", padding: "10px 20px", fontSize: "1rem" }}
            >
              다음
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
