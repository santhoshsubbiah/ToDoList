import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      list: [],
      isShowList: false
    }
  }

  updateInput = (value) => {
    // update react state
    this.setState({ newItem: value });
  }

  onClickHandler = () => {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()

    };

    // copy current list of items
    const listX = [...this.state.list];

    // add the new item to the list
    listX.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      newItem: "",
      list: listX
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.newItem} onChange={e => this.updateInput(e.target.value)}
          placeholder="Type your text here..." onKeyPress={(e) => e.key === 'Enter' ? this.onClickHandler() : null}>
        </input>

        <button onClick={this.onClickHandler} onkeyE>Add</button>
        <button onClick={() => this.setState({ isShowList: !this.state.isShowList })}>{this.state.isShowList ? 'Hide' : 'Show'} List</button>
        <button onClick={() => this.setState({ list: [] })}>Empty List</button>

        <br /> <br />

        <ul>
          {

            this.state.isShowList ? (this.state.list.map(item => {
              if (item.value) {
                return (

                  <li key={item.id}>

                    {item.value}

                    <button onClick={() => this.deleteItem(item.id)}><i>x</i></button>

                  </li>
                );
              }
            }
            )) : <i>Hide list</i>

          }
        </ul>

      </div >
    )
  }
}

export default App
