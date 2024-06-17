import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { UseFetchData } from "../UseFetchData";

const Home = () => {
  const {
    result,
    isLoading,
    isError,
    filteredCountries,
    setFilteredCountries,
  } = UseFetchData();
  return (
    <>
      {isError && <ShowMessage message="ther is wrong !" />}
      {isLoading && <ShowMessage message="data is loading..!" />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col items-center justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries}></CountryList>
        </>
      )}
    </>
  );
};
export default Home;
