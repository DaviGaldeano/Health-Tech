import PropTypes from 'prop-types';

const Search = ({search, setSearch}) => {
    return (
        <div className="">
            <input
                type="text"
                className="input-header"
                placeholder="Busca por hospitais ..."
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