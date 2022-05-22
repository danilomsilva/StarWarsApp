import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Category from './category/Category';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/')
      .then(res => res.json())
      .then(d => {
        setData(d);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const categories = Object.keys(data);

  return (
    <SafeAreaView>
      <FlatList data={categories} renderItem={item => <Category {...item} />} />
    </SafeAreaView>
  );
};

export default HomeScreen;
