import React, { useEffect, useState } from "react";
import "./About.css";
import axios from "axios";

const base = "https://jsonplaceholder.typicode.com/users";

const About = () => {
  const [users, setUsers] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [value, setValue] = useState("");
  // const [ filterItem, setFilterItem ] = useState([])

  useEffect(() => {
    axios.get(base).then((data) => {
      // console.log(data.data);
      setUsers(data.data);
    });
  }, []);

  const handleSearch = () => {
    const filtered = users.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    // setFilterData(filtered);
    setUsers(filtered);
  };

  return (
    <div>
      <div>
        <div className="search-form">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="search product"
          />
          <button onClick={handleSearch}>search</button>
        </div>
        {filterData.map((data) => (
          <div key={data.id}>
            <h1 style={{ color: "blue" }}>User name: {data.name}</h1>
            <h4 style={{ color: "blueviolet" }}>User phone: {data.phone}</h4>
            <h3 style={{ color: "dodgerblue" }}>User email: {data.email}</h3>
            <p style={{ color: "darkblue" }}>
              User address: {data.address.city}
            </p>
          </div>
        ))}
        {users.map((user) => (
          <div key={user.id}>
            <h1 style={{ color: "blue" }}>User name: {user.name}</h1>
            <h4 style={{ color: "blueviolet" }}>User phone: {user.phone}</h4>
            <h3 style={{ color: "dodgerblue" }}>User email: {user.email}</h3>
            <p style={{ color: "darkblue" }}>
              User address: {user.address.city}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
