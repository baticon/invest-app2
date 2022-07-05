import { useState, useEffect } from "react";
import style from "./searchBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import fetchStocks from "../../data/dataFinnhub";

function Searchbar(placeholder: any) {
  const [stocks, setStocks] = useState<any>([]);
  useEffect(() => {
    async function pullData() {
      const stocks = await fetchStocks();
      setStocks(stocks);
    }

    pullData();
  }, []);

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: Event) => {
    const searchWord = (event.target as HTMLInputElement).value;
    setWordEntered(searchWord);
    const newFilter = stocks.filter((value: any) => {
      return value.description.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className={style.search}>
      <div className={style.searchInputs}>
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={() => handleFilter}
        />
        <div className={style.searchIcon}>
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={() => clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className={style.dataResult}>
          {filteredData.slice(0, 15).map((value: any, key) => {
            return (
              <a
                className={style.dataItem}
                href={value.description}
                target="_blank"
              >
                <p>{value.description} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Searchbar;
