import { Input, Icon } from "semantic-ui-react";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(" ");

  return (
    <Input
      type="text"
      icon={<Icon name="search" />}
      placeholder="Search..."
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

export default SearchBar;