import React, { Component } from 'react';
import { MdSearch } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { connect } from 'react-redux';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    

    handlecloseclick = (value) => {
        document.getElementById('formreset').reset();
    }

    render() {
        const value = "search post";
        return (

            <div className="searchbar">
                <form className="form Search" id="formreset" onSubmit={this.handleSubmit} >
                    <input required type="text" className="searchbariconspace" onChange={(e) => {
                        this.setState({search:e.target.value});
                        this.props.dispatch({ type: 'SEARCH_POST', title: this.state.search })
                    }}
                        placeholder="Search Post" />
                    <div className="searchicon"><MdSearch size='30' /></div>
                    <div className="closeicon" type="reset" onClick={() => { this.handlecloseclick(value) }}><MdClose size='30' color='grey' /></div>
                </form>
            </div>
        );
    };
};


export default connect()(SearchBar);