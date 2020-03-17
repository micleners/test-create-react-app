import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiParams from '../api-params';

import { Flex, Box } from 'rebass';

export const SearchEdamam = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  const querySearch = (query = '', health = null, diet = null) => {
    axios
      .get(apiParams.searchUrl, {
        params: {
          q: query,
          diet: diet,
          health: health,
          app_id: apiParams.eadmamId,
          app_key: apiParams.edamamKey,
          from: 0,
          to: 9
        }
      })
      .then(result => {
        console.log(result);
        setData(result.data.hits);
      });
  };

  console.log(data);

  return (
    <>
      Nom Time
      <Flex flexDirection="column" alignItems="center">
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <Box
          mb={5}
          as="button"
          type="button"
          onClick={() => querySearch(query)}
        >
          Search
        </Box>
      </Flex>
      <Flex flexDirection="column">
        {data.length > 0 &&
          data.map(hit => (
            <Flex
              mb={3}
              key={hit.url}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <a href={hit.url}>
                <Box fontSize={3}>{hit.recipe.label}</Box>
                <Box as="img" src={hit.recipe.image} />
              </a>
            </Flex>
          ))}
      </Flex>
    </>
  );
};
