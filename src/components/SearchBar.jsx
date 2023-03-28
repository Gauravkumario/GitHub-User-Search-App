import React, { useState, useEffect } from "react";
import Profile from "./Profile";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${"octocat"}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      setHasError(true);
      return;
    } else {
      fetch(`https://api.github.com/users/${inputValue}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }
  };

  const onInputChangeHandler = (e) => {
    let input = e.target.value;
    setInputValue(input);
    setHasError(false);
  };

  return (
    <>
      <div className="search-bar mt-6 mb-4 p-2 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-center"
        >
          <ion-icon name="search"></ion-icon>
          <input
            type="text"
            onChange={(e) => onInputChangeHandler(e)}
            placeholder={
              hasError
                ? "please Enter the Valid userName"
                : "Search GitHub Username..."
            }
            className="text-lg w-4/5 outline-none bg-transparent text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg px-6 py-3 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <Profile userData={userData} />
    </>
  );
};

export default SearchBar;
