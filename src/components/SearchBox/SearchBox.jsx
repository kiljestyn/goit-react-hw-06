import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <section className={css.searchBox}>
      <span className={css.titleSearch}>Find contacts by name</span>

      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        placeholder="Search ..."
      />
    </section>
  );
};

export default SearchBox;
