import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiParams from '../api-params';

import { Flex, Box } from 'rebass';

export const SearchGithub = () => {
  const [data, setData] = useState('');
  const [query, setQuery] = useState('');

  const githubSearch = (name = 'micleners') => {
    axios.get(apiParams.githubUrl + name).then(response => {
      setData(response.data);
    });
  };

  console.log(data);

  return (
    <>
      Github Search
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
          onClick={() => githubSearch(query)}
        >
          Search
        </Box>
      </Flex>
      <Flex flexDirection="column">
        {data && (
          <Flex
            as="a"
            mb={3}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box fontSize={6}>{data.login}</Box>
            <Box as="img" src={data.avatar_url} />
            <Box fontSize={3}>{data.company}</Box>
            <Box fontSize={2}>{data.bio}</Box>
          </Flex>
        )}
      </Flex>
    </>
  );
};
