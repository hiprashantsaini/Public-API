import { useState } from 'react';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Search from './Components/Search';
function App() {
  const [showCategory,setShowCategory]=useState(true);
  const [search,setSearch]=useState('');
  console.log("showCate:",showCategory);
  return (
    <div>
      <Header/>
      <Search showCategory={showCategory} setShowCategory={setShowCategory} search={search} setSearch={setSearch}/>
      <Body showCategory={showCategory} search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
