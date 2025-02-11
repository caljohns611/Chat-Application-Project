import React from 'react';
import Profile from './Components/Profile';
import Posts from './Hooks/Post';
import Search from './Hooks/Search';

const App = () => {
  return (
    <div className='app'>
      <Profile />
      <Search />
      <Posts />
    </div>
  );
};

export default App;