import { useState } from "react";

import "./App.css";

function App() {
  const [page, setPage] = useState(1);

  const [endereco, setEndereco] = useState([]);

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;

  const getAddress = async () => {
    try {
      let res = await fetch(url);
      let data = await res.json();

      console.log(data);
      setEndereco([...endereco, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(endereco);

  return <div className="App"></div>;
}

export default App;
