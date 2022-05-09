import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

export function Modal({ character, setIsModalOpen }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const films = character.films;

    let moviesFetched = [];

    await Promise.all(
      films.map(async (film) => {
        const res = await fetch(film);
        const swfilm = await res.json();

        moviesFetched.push(swfilm);
      })
    );
    setMovies(moviesFetched);
  };

  return (
    <div className="bg-black bg-opacity-70 absolute inset-0 flex justify-center items-center">
      <div className="bg-zinc-800 w-96 rounded-lg flex flex-col items-center">
        <header className="flex items-center justify-center text-zinc-100 font-bold text-4xl mt-5 w-full">
          <span className="p-2">{character.name}</span>
          <AiOutlineClose
            className="cursor-pointer "
            size={20}
            onClick={() => setIsModalOpen(false)}
          />
        </header>
        <div className="flex flex-col h-full w-full mt-5 ml-5 mtext-xl justify-evenly text-zinc-200">
          <div className="flex flex-col mb-4">
            <span className="text-lg font-bold">Birth Year</span>
            <span>{character.birth_year}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-lg font-bold">Gender</span>
            <span>{character.gender}</span>
          </div>
          <div className="flex flex-col mb-4">
            <span className="text-lg font-bold">Eye Color</span>
            <span>{character.eye_color}</span>
          </div>
          <div>
            <span className="text-lg font-bold">Movies</span>
            {movies.map((movie) => {
              return (
                <div className="mb-2">
                  {movie.title} | {movie.release_date}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
