import React, { Component } from 'react';
import Axios from 'axios'

import TodoListUI from './TodoListUI'
import store from './store/index'

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  initListAction
} from './store/actionCreators'

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(() => this.handleStoreChange())
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  // 添加事件
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  // 删除事件
  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
  componentDidMount() {
    Axios.get('/api/todolist').then((res) => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
      console.log(res.data)
    }).catch((r) => console.log(r))
    

  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list = { this.state.list }
        handleInputChange = {(e) => this.handleInputChange(e)}
        handleBtnClick = {() => this.handleBtnClick()}
        handleItemDelete = {(index) => this.handleItemDelete(index)}
      />
    );
  }
}

export default TodoList;
