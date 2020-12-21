import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import {createStore} from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux';


// 스토어 생성
// 스토어 안에는 현재 앱 상태와 리듀서 포함 + 몇가지 내장 함수

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')

);
