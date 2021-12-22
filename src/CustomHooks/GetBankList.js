import { useEffect, useState } from "react";

const useGetBankList = (
  pageNo = 1,
  batchSize = 10,
  filters = { city: "MUMBAI", category: "", query: "" }
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  let listFromStorage =
    JSON.parse(localStorage.getItem(`bankList${filters.city}`)) || [];

  const getDataFromServer = () => {
    const url = `https://vast-shore-74260.herokuapp.com/banks?city=${filters.city}`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) {
          localStorage.setItem(`bankList${filters.city}`, JSON.stringify(res));
        } else {
          setError(true);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    if (listFromStorage.length === 0) {
      getDataFromServer();
    }
  });

  const getFilteredList = () => {
    const startIndex = (pageNo - 1) * 10;
    const endIndex = startIndex + batchSize;
    const list = listFromStorage.slice(startIndex, endIndex);
    if (filters.category !== "") {
      return list.filter((ele) =>
        ele[filters.category].includes(filters.query)
      );
    }
    return list;
  };

  return {
    isLoading,
    error,
    bankList: getFilteredList(),
  };
};

export default useGetBankList;
