import React, { useState, useEffect } from 'react';
import DummyAPI from './DummyAPI'
import Item from './Item'
import './DummyAPI.scss';

const DummyAPIContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(response => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const handleChange = (id) => {
    const newData = data.map(item => {
      if (item.id === id) item.completed = !item.completed;
      return item;
    });
    setData(newData);
  }

  const renderContent = () => {
    const todoItems = data.map(item => <Item {...item} key={item.id} handleChange={handleChange} />);
    return isLoading ? <p>Loading...</p> : <ul>{todoItems}</ul>;
  }

  return <DummyAPI content={renderContent()} />;
}

export { DummyAPIContainer };
