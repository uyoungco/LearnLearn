import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App'
import TodoList from './TodoList'
// import
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));
registerServiceWorker();
