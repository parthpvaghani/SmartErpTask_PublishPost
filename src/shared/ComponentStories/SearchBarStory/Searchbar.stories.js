import React from 'react';
import SearchBar from './Searchbar';
import './searchbar.css';

import postReducer from '../postReducer';

import { createStore } from 'redux';

import ProviderWrapper from '../Provider.js'

const store = createStore(postReducer);

export default {
    title: 'Searchbar',
    component: 'SearchBar'
};

export const Defaultsearchbar = () => {
    return (
        <ProviderWrapper store={store}>
        <SearchBar />
        </ProviderWrapper>
    )
};


