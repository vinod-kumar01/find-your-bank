import { useState } from "react";
import Filters from "../../Components/BankFilters";
import BanksList from "../../Components/BanksList";
import { cityConstants } from "../../Constants";
import useGetBankList from "../../CustomHooks/GetBankList";
import "./index.css";

const defaultCity = cityConstants.defaultCity;

const AllBanksContainer = () => {
  const [city, setCity] = useState(defaultCity);
  const [searchCategory, setSearchCategory] = useState({
    value: "",
    label: "",
  });
  const [searchInput, setSearchInput] = useState("");
  const { isLoading, error, bankList } = useGetBankList(1, 10, {
    city: city.value,
    category: searchCategory.value,
    query: searchInput,
  });

  console.log(isLoading, error, bankList);
  return (
    <div>
      <div className="main-container-header">
        <div className="main-container-heading">All Banks</div>
        <Filters
          city={city}
          searchCategory={searchCategory}
          searchInput={searchInput}
          onCityChange={(selectedCity) => {
            setCity(selectedCity);
          }}
          onSearchCategoryChange={(selectedCategory) => {
            setSearchCategory(selectedCategory);
          }}
          onSearch={(input) => {
            setSearchInput(input);
          }}
        />
      </div>
      <BanksList bankList={bankList} isLoading={isLoading} error={error} />
    </div>
  );
};

export default AllBanksContainer;
