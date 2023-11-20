import PropTypes from 'prop-types';

const Search = ({search, setSearch}) => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Digite para pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSeacrh: PropTypes.func.isRequired
}

export default Search