import React from 'react';
import Post from './Post';
import EditComponent from './EditPost';
import './Post.css';
import postReducer from '../postReducer';
import { createStore } from 'redux';
import ProviderWrapper from '../Provider.js'

const store = createStore(postReducer);

export default {
    title: 'Post',
};

export const DefaultPost = () => {
    return (
        <ProviderWrapper store={store}>
         <Post title={'Parth'} message={'hello i am a frontend developer'}/>
        <Post title={'Bhavin'} message={'hello i am a backend developer'}/>
        <Post title={'Bhavik'} message={'hello i am a automation developer'}/>
        <Post title={'Ankit'} message={'hello i am a fullstack developer'}/>
        <Post title={'Pavan'} message={'hello i am a python developer'}/> 
        </ProviderWrapper>
    )
};

export const EditPost = () => {
    return (
        <ProviderWrapper store={store}>
        <EditComponent id={'1'} title={'Parth'} message={'hello i am a frontend developer'}/>
        </ProviderWrapper>
    )
};

