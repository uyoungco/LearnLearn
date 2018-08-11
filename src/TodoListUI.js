import React from 'react';
import { Input, List, Button } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
      <Input
        value={props.inputValue}
        placeholder="todo info"
        style={{ width: '300px',marginRight: '10px' }}
        onChange={(e) => props.handleInputChange(e)}
      />
      <Button
        type="primary"
        onClick={() => props.handleBtnClick()}
      >按钮</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '300px' }}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => props.handleItemDelete(index)}>{item}</List.Item>)}
      />
    </div>
  )
}


export default TodoListUI