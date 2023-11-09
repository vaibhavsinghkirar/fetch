import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Brand</th>         
          <th>Price</th>
          <th>Rating</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
}

export default App;