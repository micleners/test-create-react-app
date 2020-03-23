import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiParams from '../api-params';
import { Flex, Box } from 'rebass';

const App = () => {
  const [list1, setList1] = useState(['Item 1', 'Item 2']);
  const [list2, setList2] = useState(['Item A', 'Item B']);
  const [list3, setList3] = useState(['Orange', 'Apple']);
  const [list4, setList4] = useState(['Call', 'Slack']);

  const addCard = (list, listMethod) => {
    const result = window.prompt('Enter new card', 'Enter new card');
    if (result) {
      list.push(result);
      const newList = list.slice();
      listMethod(newList);
    }
  };

  const leftClick = (item, list, listNumber) => {
    if (listNumber === '2') {
      const newList2 = list2.filter(e => e !== item);
      setList2(newList2);

      list1.push(item);
      const newList1 = list1.slice();
      setList1(newList1);
    }
    if (listNumber === '3') {
      const newList3 = list3.filter(e => e !== item);
      setList3(newList3);

      list2.push(item);
      const newList2 = list2.slice();
      setList2(newList2);
    }
    if (listNumber === '4') {
      const newList4 = list4.filter(e => e !== item);
      setList4(newList4);

      list3.push(item);
      const newList3 = list3.slice();
      setList3(newList3);
    }
  };

  const rightClick = (item, list, listNumber) => {
    if (listNumber === '1') {
      const newList1 = list1.filter(e => e !== item);
      setList1(newList1);

      list2.push(item);
      const newList2 = list2.slice();
      setList2(newList2);
    }
    if (listNumber === '2') {
      const newList2 = list2.filter(e => e !== item);
      setList2(newList2);

      list3.push(item);
      const newList3 = list3.slice();
      setList3(newList3);
    }
    if (listNumber === '3') {
      const newList3 = list3.filter(e => e !== item);
      setList3(newList3);

      list4.push(item);
      const newList4 = list4.slice();
      setList4(newList4);
    }
  };

  const Column = props => {
    return (
      <Flex flexGrow="1" flexDirection="column" {...props}>
        <Flex
          height="30px"
          verticalAlign="middle"
          color="white"
          bg={props.headerBg}
          alignItems="center"
          justifyContent="center"
        >
          <Box>{props.name}</Box>
        </Flex>
        {props.list &&
          props.list.map((item, index) => (
            <Flex
              key={item}
              mt={2}
              width="100%"
              bg="white"
              justifyContent="space-between"
            >
              <Box>
                <Box
                  hidden={props.listNumber === '1'}
                  onClick={() => leftClick(item, props.list, props.listNumber)}
                >
                  &lt;
                </Box>
              </Box>
              <Box>{item}</Box>
              <Box>
                <Box
                  hidden={props.listNumber === '4'}
                  onClick={() => rightClick(item, props.list, props.listNumber)}
                >
                  &gt;
                </Box>
              </Box>
            </Flex>
          ))}
        <Box mt="4" onClick={() => addCard(props.list, props.listMethod)}>
          + Add a card
        </Box>
      </Flex>
    );
  };

  return (
    <Flex
      bg="#eceeee"
      height="100%"
      className="App"
      flexDirection="row"
      alignItems="center"
      justifyContent="stretch"
      alignItems="stretch"
      py="30px"
    >
      <Column
        mx="25px"
        headerBg="#8e6e95"
        name="Number Items"
        list={list1}
        listNumber="1"
        listMethod={setList1}
      />
      <Column
        mr="25px"
        headerBg="#39A59C"
        name="Letter Items"
        list={list2}
        listNumber="2"
        listMethod={setList2}
      />
      <Column
        mr="25px"
        headerBg="#344759"
        name="Fruit"
        list={list3}
        listNumber="3"
        listMethod={setList3}
      />
      <Column
        mr="25px"
        headerBg="#E8741E"
        name="Communication"
        list={list4}
        listNumber="4"
        listMethod={setList4}
      />
    </Flex>
  );
};

export default App;
