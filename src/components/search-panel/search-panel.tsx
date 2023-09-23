import React from "react";
import { useFilter } from "../../store";
import './search-panel.scss';

const SearchPanel: React.FC = () => {
  const searchTerm = useFilter((state) => state.searchTerm)
  const setSearchTerm = useFilter((state) => state.setSearchTerm);

  return (
    <input placeholder="type to search" className="search-panel" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
  );
}

export default SearchPanel;