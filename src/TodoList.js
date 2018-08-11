import React, { Component } from 'react';
import { Input, List, Button } from 'antd';
import store from './store/index'
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM
} from './store/actionTypes'

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
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  // 添加事件
  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }
  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
        <Input
          value={this.state.inputValue}
          placeholder="todo info"
          style={{ width: '300px',marginRight: '10px' }}
          onChange={(e) => this.handleInputChange(e)}
        />
        <Button
          type="primary"
          onClick={() => this.handleBtnClick()}
        >按钮</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={() => this.handleItemDelete(index)}>{item}</List.Item>)}
        />
      </div>
    );
  }
}

export default TodoList;
