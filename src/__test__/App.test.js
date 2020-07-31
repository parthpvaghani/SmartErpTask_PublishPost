import React from 'react';
import postReducer from '../reducers/postReducer';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from '../MainComponent/App';
import PostForm from '../shared/PostForm';
import SearchBar from '../shared/Searchbar';

const store = createStore(postReducer);

it('renders ALl', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><App/></Provider>,div)
});

it('renders searchbar', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><SearchBar /></Provider>,div)
});

it('renders PostForm', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Provider store={store}><PostForm/></Provider>,div)
});
