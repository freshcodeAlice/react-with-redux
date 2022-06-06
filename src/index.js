import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';

import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/*
REDUX
- store - js-объект, общее хранилище
- dispatch - функция, отправляющая объект action в reducer
- reducer - pure function, возвращает новый state -> store
- action - js-объект с обязательным полем type, который передает в reducer, что случилось и какие-то данные, на основе которых тот создает новый state


REACT-REDUX
- Provider - компонента, раздающая store вниз по дереву компонент
- connect - функция, принимающая два аргумента, возвращающая HOC. "Подписывает" компоненту на изменение store
--- mapStateToProps - функцию, принимающая весь state из store и возвращает ту его часть, которая нужна нашей конкретной компоненте
--- mapDispatchToProps - функция или объект с actionCreators (функциями, возвращающими объект action)

*/
