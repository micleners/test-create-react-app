import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import axios from 'axios';
import './App.css';
import apiParams from '../api-params';

let result;

const App = () => {
  const querySearch = async (query = '', health = null, diet = null) => {
    return await axios.get(apiParams.searchUrl, {
      params: {
        q: query,
        diet: diet,
        health: health,
        app_id: apiParams.eadmamId,
        app_key: apiParams.edamamKey,
        from: 0,
        to: 9
      }
    });
  };

  const [data, setData] = useState({ hits: [] });

  const gitHubSearch = async (name = 'micleners') => {
    axios.get(apiParams.githubUrl + name).then(response => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
      setData(response.data);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      // const result = await querySearch('apples');
      const result = await gitHubSearch();

      // axios(
      //   'https://hn.algolia.com/api/v1/search?query=redux'
      // );
      // setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);
  return <div className="App">Nom Time {result}</div>;
};

export default App;
