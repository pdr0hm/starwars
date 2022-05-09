export function Character({ character, setSelectedCharacter, setIsModalOpen }) {
  const handleOnClick = () => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };
  return (
    <div
      className=" md:w-40 md:h-40 w-24 h-24 p-1 bg-sw_gray rounded-md flex items-center justify-center cursor-pointer font-bold hover:shadow-md hover:shadow-sw_yellow"
      onClick={handleOnClick}
    >
      <span className="text-zinc-100">{character.name}</span>
    </div>
  );
}
