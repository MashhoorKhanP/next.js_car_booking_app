"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
const SearchButton = ({otherClasses}:{
  otherClasses: string;
}) => {
  return(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="seachButtonImage" width={40} height={40} className="object-contain"/>
  </button>)
}
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar_item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses={'sm:hidden'}/>
      </div>
    </form>
  );
};

export default SearchBar;
