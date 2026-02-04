import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
    /*
        MainContainer
        - Video Background
        - Video Title
        SecondaryContainer
         - Movies List * n
          - Cards * n 
    */
  );
};

export default Browse;
