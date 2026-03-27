import { B_IMAGE, B_IMAGE_SRCSET } from "../utils/constants";
import GptMoviesSuggetions from "./GptMoviesSuggetions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className=" fixed -z-10">
        <img
          className="min-h-screen object-cover"
          src={B_IMAGE}
          srcSet={B_IMAGE_SRCSET}
          alt="background Image"
        />
      </div>
      <div className="-mt-20 ">
        <GptSearchBar />
        <GptMoviesSuggetions />
      </div>
    </>
  );
};

export default GptSearchPage;
