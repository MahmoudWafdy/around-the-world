const SearchInput = ({ countriesList, filterCountriesList }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(e.target.elements.search.value);
    const searchedWord = e.target.elements.search.value;

    const filteredCountries =
      !searchedWord || searchedWord === ""
        ? countriesList
        : countriesList.filter((country) =>
            country.name.official
              .toLowerCase()
              .includes(searchedWord.toLowerCase()),
          );
    filterCountriesList(filteredCountries);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex h-14 w-full items-center justify-start gap-3 rounded-full bg-white px-5 shadow md:w-[480px] dark:bg-gray-800"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search">
          <path
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            fill="#374151"
          />
        </g>
      </svg>
      <input
        className="h-full w-full max-w-md rounded-full outline-none md:h-14 dark:bg-gray-800 dark:placeholder-gray-100"
        type="text"
        name="search"
        placeholder="Search for acountry..."
      ></input>
    </form>
  );
};
export default SearchInput;
