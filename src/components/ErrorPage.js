const ErrorPage = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        SomeThing went wrong ❌
      </h1>
      <p className="mb-6 text-lg">
        {message || "API failed. please Try Again later."}
      </p>
      <button
        onClick={onRetry}
        className="bg-red-500 px-6 py-2 rounded-md hover:bg-red-700"
      >
        Retry 🔄
      </button>
    </div>
  );
};

export default ErrorPage;
