import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    
    // console.log('constructor')

    this.state = {
      name: 'Varis',
      monsters: [
        // {
        //   name: 'Austris'
        // },
        // {
        //   name: 'Lauma'
        // },
        // {
        //   name: 'Krišjānis'
        // }
      ],
      searchField: ''
    };
  }

  componentDidMount() {
    // console.log('componentDidMount')
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return {
              monsters: users
            }
          },
          // () => {
          //   console.log(this.state)
          // }
        )
      })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(
      () => {
        return { searchField }
      }
    )
  }

  render() {
    // console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <h1>Mosters Rolodex</h1>
        
        <SearchBox
          className='monsters-search-box'
          onChangeHandler={onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
        <div>
          <p>
            My name is {this.state.name}
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  return {
                    name: 'Austris'
                  };
                },
                () => {
                  // callback
                  console.log(this.state)
                }
              )
            }}
          >Change name</button>
        </div>
      </div>
    );
  }
}

export default App;
