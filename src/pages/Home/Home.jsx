import React, { useState } from "react";

const Home = () => {
  const [item, setItem] = useState([]);

  function AddItem() {
    const newItem = "Item";
    setItem([...item, newItem]);
  }

  return (
    <div>
      <div>
        <button
          style={{ width: "40px", height: "40px" }}
          onClick={AddItem}
        ></button>
        <ul>
          {item.map((data, index) => (
            <li style={{ listStyle: "decimal" }} key={index}>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
