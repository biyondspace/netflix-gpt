import { B_IMAGE, B_IMAGE_SRCSET } from "../utils/constants";
import GptMoviesSuggetions from "./GptMoviesSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div className="-mt-20">
      <div className=" absolute -z-10">
        <img src={B_IMAGE} srcSet={B_IMAGE_SRCSET} alt="background Image" />
      </div>

      <GptSearchBar />
      <GptMoviesSuggetions />
    </div>
  );
};

export default GptSearchPage;
