import CountryCard from "./CountryCard";
import EmptyPage from "./EmptyPage";

const CountryList = ({ data }) => {
  return (
    <div className="mt-8 grid gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,auto))] lg:grid-cols-[repeat(4,minmax(0,auto))] lg:gap-y-[70px]">
      {data && data.length ? (
        data.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            flag={country.flags.svg}
            region={country.region}
            Populatin={country.population}
            capital={country.capital ? country.capital[0] : "N/A"}
          />
        ))
      ) : (
        <EmptyPage />
      )}
    </div>
  );
};
export default CountryList;
