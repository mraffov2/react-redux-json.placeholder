import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import Posts from './components/getPosts';
import Navigation from './components/navigation';
import PostForm from './components/formPosts';


import './App.css';

function App() {
    return (
        <Provider store={store}>
        	<Router>
        		< Navigation />
        		<Route path="/" exact component={Posts} />
        		<Route path="/newposts" component={PostForm} />
        	</ Router>
        </Provider>

    );
}

export default App;
