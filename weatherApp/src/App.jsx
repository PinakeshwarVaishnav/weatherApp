const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
};

const Header = () => {
  return <h1>Weather App</h1>;
};

const SearchBar = () => {
  return (
    <div>
      <input type="text" />
      <button type="submit">Search</button>
    </div>
  );
};

export default App;
