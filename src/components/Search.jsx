import PropTypes from "prop-types";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <input
        type="text"
        className="input-header"
        placeholder="Busca por hospitais ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired, // Corrigido para setSearch
};

export default Search;
