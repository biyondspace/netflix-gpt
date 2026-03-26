import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import client from "../utils/openai";
import ErrorPage from "./ErrorPage";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const searchText = useRef();
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    try {
      
      // Make an Api call to Gpt Api and get movie results
      const gptQuery =
        "Act as a movie recommendation system and suggest some movies for the query :" +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example result: Lagaan, raazi, Sardar, Dangal, SherShaah";

      const completion = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: gptQuery }],
      });

      const result = completion.choices?.[0]?.message.content;

      if (!result) {
        throw new Error("No Data found from API");
      } else {
        const gptMovies = result.split(",");

        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(
          addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
          }),
        );
      }

      setError(false);
    } catch (err) {
      setError(true);
      seterrorMessage("API Failed. Please try again.");
    }

  };
  if (error) {
    return <ErrorPage message={errorMessage} onRetry={() => setError(false)} />;
  }

  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>
        <button
          className="bg-red-500 col-span-3 m-4 text-white py-2 px-4 m-2 rounded-md hover:bg-red-700"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
