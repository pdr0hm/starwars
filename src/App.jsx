import { useState, useEffect } from "react";
import "./App.css";

import logo from "./assets/logo.png";
import { Character } from "./components/Character";
import { Searchbar } from "./components/Searchbar";
import { Modal } from "./components/Modal";

function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    let nextPage = "https://swapi.dev/api/people/";

    let characters = [];

    while (nextPage) {
      const res = await fetch(nextPage);

      const { next, results } = await res.json();

      nextPage = next;

      characters = [...characters, ...results];
    }

    setCharacters(characters);
  }

  const handleSelectedCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="w-full h-24 bg-sky flex items-center">
        <img src={logo} alt="Logo Sky Wars" className="w-24 h-18 pl-5" />
      </header>
      <Searchbar setSearch={setSearch} value={search} />

      <div className=" md:max-w-screen-lg md:h-[660px] mx-auto mt-5  bg-zinc-900 rounded-md flex flex-wrap gap-x-20 gap-y-10 justify-center p-4 overflow-y-scroll  scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full ">
        {characters &&
          (!isModalOpen ? (
            characters.map((character) => {
              return (
                character.name.toLowerCase().match(search.toLowerCase()) && (
                  <Character
                    key={character.name}
                    character={character}
                    setIsModalOpen={handleOpenModal}
                    setSelectedCharacter={handleSelectedCharacter}
                  />
                )
              );
            })
          ) : (
            <Modal
              character={selectedCharacter}
              setIsModalOpen={handleCloseModal}
            />
          ))}
      </div>
    </>
  );
}

export default App;
