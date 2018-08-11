import { takeEvery, put } from 'redux-saga/effects'
import Axios from 'axios'

import { initListAction } from './actionCreators'
import { GET_INIT_LIST } from './actionTypes'


function* getInitList() {
  try {
    const res = yield Axios.get('/api/todolist')
    const action = initListAction(res.data)
    yield put(action)
  }catch(e) {
    console.log(e)
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery (GET_INIT_LIST, getInitList)
}

export default mySaga;