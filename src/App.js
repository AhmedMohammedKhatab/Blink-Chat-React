import React, {Component} from 'react';
import Side from './components/sidebar';
import List from './components/list';
import Box from './components/box';
import './App.css';

class App extends Component {
  state = {
    chats: [
      {type: "group", title: "Mom's Discharge Plan", user: "Karen Becker" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 1},
      {type: "group", title: "Mom's Diet", user: "Karen Becker" , last: "Lorem ipsum dolor sit amet", unseen: "2", id: 2},
      {type: "single", user: "David Williams" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 3},
      {type: "single", user: "John Doe" , last: "Lorem ipsum dolor sit amet", unseen: "1", id: 4},
      {type: "single", user: "Jane Doe" , last: "Lorem ipsum dolor sit amet", unseen: "3", id: 5},
      {type: "group", title: "Easter Weekend", user: "Love One" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 6},
      {type: "group", title: "Mom's Discharge Plan", user: "Karen Becker" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 7},
      {type: "group", title: "Mom's Diet", user: "Karen Becker" , last: "Lorem ipsum dolor sit amet", unseen: "2", id: 8},
      {type: "single", user: "David Williams" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 9},
      {type: "single", user: "John Doe" , last: "Lorem ipsum dolor sit amet", unseen: "1", id: 10},
      {type: "single", user: "Jane Doe" , last: "Lorem ipsum dolor sit amet", unseen: "3", id: 11},
      {type: "group", title: "Easter Weekend", user: "Love One" , last: "Lorem ipsum dolor sit amet", unseen: "0", id: 12}
    ]
  }
  render  () {
    return (
      <div className="App">
        <Side />
        <div className="list">
          <List chats={this.state.chats}/>
        </div>
        <Box chats={this.state.chats}/>
      </div>
    );
  }
}

export default App;
