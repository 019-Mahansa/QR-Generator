import React, {useState, useEffect}from "react";
import axios from axios

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => setData(response.data.message))
      .catch(error => console.log(error));
  }, []);

  return <div>{data}</div>;
}
export default App;