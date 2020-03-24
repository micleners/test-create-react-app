import React, { useState } from 'react';
import './App.css';
import { Flex, Box } from 'rebass';

const App = () => {
  const [lists, setLists] = useState([
    ['Item 1', 'Item 2'],
    ['Item A', 'Item B'],
    ['Orange', 'Apple'],
    ['Call', 'Slack']
  ]);

  const [columnMetaData, setColumnMetaData] = useState([
    {
      headerBg: '#8e6e95',
      name: 'Number Items'
    },
    {
      headerBg: '#39A59C',
      name: 'Letter Items'
    },
    {
      headerBg: '#344759',
      name: 'Fruit'
    },
    {
      headerBg: '#E8741E',
      name: 'Communication'
    }
  ]);

  const addCard = index => {
    const result = window.prompt('Enter new card', 'Enter new card');
    if (result) {
      lists[index].push(result);
      setLists(lists.slice());
    }
  };

  const addList = index => {
    const name = window.prompt(
      'Enter new column name',
      'Enter new column name'
    );
    const headerBg = window.prompt('Enter color hex', '#000000');
    const metaData = { name, headerBg };
    if (headerBg && metaData) {
      columnMetaData.push(metaData);
      setColumnMetaData(columnMetaData.slice());
      lists.push([]);
      setLists(lists.slice());
    }
  };

  const leftClick = (item, listNumber) => {
    if (listNumber > 0) {
      lists[listNumber - 1].push(item);
      lists[listNumber] = lists[listNumber].filter(e => e !== item);
      setLists(lists.slice());
    }
  };

  const rightClick = (item, listNumber) => {
    if (listNumber < lists.length - 1) {
      lists[listNumber + 1].push(item);
      lists[listNumber] = lists[listNumber].filter(e => e !== item);
      setLists(lists.slice());
    }
  };

  const Column = props => {
    return (
      <Flex flexGrow="1" flexDirection="column" {...props}>
        <Flex
          height="80px"
          verticalAlign="middle"
          color="white"
          bg={props.headerBg}
          alignItems="center"
          justifyContent="center"
        >
          <Box>{props.name}</Box>
        </Flex>
        {lists[props.listNumber] &&
          lists[props.listNumber].map(item => (
            <Flex
              key={item}
              mt={2}
              height="50px"
              width="100%"
              bg="white"
              justifyContent="space-between"
            >
              <Box my="auto" ml={2}>
                <Box
                  hidden={props.listNumber === 0}
                  onClick={() => leftClick(item, props.listNumber)}
                >
                  &lt;
                </Box>
              </Box>
              <Box margin="auto">{item}</Box>
              <Box my="auto" mr={2}>
                <Box
                  hidden={props.listNumber === 3}
                  onClick={() => rightClick(item, props.listNumber)}
                >
                  &gt;
                </Box>
              </Box>
            </Flex>
          ))}
        <Box mt={4} onClick={() => addCard(props.listNumber)}>
          + Add a card
        </Box>
      </Flex>
    );
  };

  return (
    <Box bg="#eceeee" height="100%" pb="100px">
      <Flex
        height="100%"
        className="App"
        flexDirection="row"
        justifyContent="stretch"
        alignItems="stretch"
        py="30px"
      >
        {lists.length > 0 &&
          lists.map((list, index) => {
            const metaData = columnMetaData[index];
            return (
              <Column
                ml={index === 0 ? '25px' : ''}
                mr="25px"
                headerBg={metaData.headerBg}
                name={metaData.name}
                list={list}
                listNumber={index}
              />
            );
          })}
      </Flex>
      <Box
        bg="#BABABA"
        onClick={() => addList()}
        mx="auto"
        my="100px"
        width="200px"
        padding="20px"
        textAlign="center"
        verticalAlign="middle"
        color="white"
      >
        Add Column
      </Box>
    </Box>
  );
};

export default App;
