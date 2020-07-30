import React from 'react';
import PostForm from './PostForm';
import './PostForm.css';
import postReducer from '../postReducer';

import { createStore } from 'redux';

import ProviderWrapper from '../Provider.js'

const store = createStore(postReducer);

export default {
    title: 'PostForm',
    component: 'PostForm'
};

export const DefaultPostForm = () => {
    return (
        <ProviderWrapper store={store}>
        <PostForm />
        </ProviderWrapper>
    )
};


