/*eslint-disabl*/

import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, region, Populatin, capital }) => {
  return (
    <Link to={name}>
      <div className="h-full rounded bg-gray-50 p-3 pb-9 shadow-sm lg:w-[264px] dark:bg-gray-800">
        <img
          className="mb-4 h-40 w-full rounded-md"
          src={flag}
          alt="placeholder"
          loading="lazy"
        ></img>
        <h2 className="mb-4 ml-3 text-lg font-extrabold">{name}</h2>
        <div className="- ml-3 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Populatin : </span>
            <span className="font-light"> {Populatin}</span>
          </p>
          <p>
            <span className="font-semibold">region : </span>
            <span className="font-light"> {region}</span>
          </p>
          <p>
            <span className="font-semibold">capital : </span>
            <span className="font-light"> {capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default CountryCard;
