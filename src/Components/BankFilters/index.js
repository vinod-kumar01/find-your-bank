import "./index.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import { cityConstants } from "../../Constants";

const cities = cityConstants.cities;
const categories = cityConstants.categories;

const Filters = ({
  city,
  searchCategory,
  onCityChange,
  onSearchCategoryChange,
  onSearch,
}) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timerId = setTimeout(() => {
      onSearch(search);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [search]);
  return (
    <div className="main-container-filters">
      <Select
        placeholder="Select a City"
        options={cities}
        value={city}
        onChange={(selectedCity) => {
          onCityChange(selectedCity);
          setSearch("");
        }}
      />
      <Select
        placeholder={"Select a City"}
        options={categories}
        value={searchCategory}
        onChange={(selectedCategory) =>
          onSearchCategoryChange(selectedCategory)
        }
      />
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Filters;
