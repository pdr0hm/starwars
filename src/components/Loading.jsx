import LoadingImage from "../assets/loading.png";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={LoadingImage}
        alt="Loading"
        className="w-44 h-44 animate-spin"
      />
      <span className="text-zinc-100 text-4xl">LOADING...</span>
    </div>
  );
}
