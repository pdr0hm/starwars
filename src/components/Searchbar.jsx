export function Searchbar({ setSearch, search }) {
  return (
    <div>
      <form className=" max-w-xs md:max-w-screen-lg md:max-h-screen-lg h-10 mx-auto  rounded-md flex items-center  ">
        <input
          type="text"
          className="w-full mr-2 bg-zinc-100 cursor-pointer p-2 rounded-md placeholder-zinc-900"
          placeholder={"Search for a Star Wars Character!"}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
}
