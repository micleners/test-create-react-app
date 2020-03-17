import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiParams from '../api-params';
import { SearchEdamam } from './SearchEdamam';
import { SearchGithub } from './SearchGithub';
import { Flex, Box } from 'rebass';

let result;

const App = () => {
  const [showEdamam, setShowEdamam] = useState(false);
  const [data, setData] = useState({ hits: [] });

  const gitHubSearch = (name = 'micleners') => {
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
  return (
    <Flex className="App" flexDirection="column" alignItems="center">
      <Box
        mb={3}
        as="button"
        onClick={() => setShowEdamam(showEdamam => !showEdamam)}
      >
        Show {showEdamam ? 'Github Search' : 'Recipe Search'}
      </Box>
      <Box hidden={!showEdamam}>
        <SearchEdamam />
      </Box>
      <Box hidden={showEdamam}>
        <SearchGithub />
      </Box>
    </Flex>
  );
};

export default App;
