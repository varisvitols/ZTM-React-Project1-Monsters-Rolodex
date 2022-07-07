import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  console.log('render');
  
  const [title, setTitle] = useState('');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log({ searchField });
  console.log(searchField);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField)
    }))
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const titleString = event.target.value.toLocaleLowerCase();
    setTitle(titleString);
  }

  return (
    <div className="App">
      <h1>{title}</h1>
      
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <br />
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onTitleChange}
        placeholder='enter title'
      />

      <CardList monsters={filteredMonsters} />

      {/*
      A way to add comments
    */}
    </div>
  )
}

export default App;
