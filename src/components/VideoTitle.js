const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4">{overview}</p>
      <div className="my-3 md:m-0">
        <button className=" bg-white text-black py-1 md:py-3 px-3 md:px-7 text-xl rounded-lg hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block m-4 bg-gray-400 bg-opacity-50 text-white p-3 px-7 text-xl rounded-lg hover:bg-gray-500">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
