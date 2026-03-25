import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-2 text-white">
      <h1 className="text-3xl py-6 ml-2 font-bold"> {title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
