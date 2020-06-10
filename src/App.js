import React from 'react';
import SearchMovie from './SearchMovie';
import './App.css';

const App = () => {
  return (
      <div className="container">
          <h1 className="title">我的电影搜索</h1>
          <SearchMovie />
      </div>
  );
}


export default App;
