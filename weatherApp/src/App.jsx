import { useState } from "react";

const App = () => {
  const [userLocation, setUserLocation] = useState("");
  return (
    <div>
      <Header />
      <SearchBar setUserLocation={setUserLocation} />
    </div>
  );
};

const Header = () => {
  return <h1>Weather App</h1>;
};

const SearchBar = ({ setUserLocation }) => {
  const handleChange = (e) => {
    setUserLocation(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter your location"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default App;
