import React, { Component } from 'react';
import PostForm from '../shared/PostForm';
import AllPost from '../shared/AllPost';
import SearchBar from '../shared/Searchbar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpost: true,
      publishedpost: false,
      bothsection: true
    }
  }

  togglefornewpost() {
    this.setState({
      newpost: true,
      publishedpost: false
    })
  }

  toggleforpublishedpost() {
    this.setState({
      newpost: false,
      publishedpost: true
    })
  }

  toggleview=()=> {
    this.setState({
      bothsection:!this.state.bothsection
    })
  }
  

  render() {

    const viewboth = () => {

      return (
        <div className="">
          <div className="viewbothgrid-container">
            <div className="item1">
              {<PostForm />}
            </div>
            <div className="item2">
              {<AllPost />}
            </div>
          </div>

        </div>)
    }



    return (
      <div className="App">

        <div className="navbar">
          <h2 className="center ">SMARTERP - Post It</h2>

          {this.state.newpost ? <SearchBar /> : <SearchBar />}
        </div>
        {!this.state.bothsection ?
          <div className="buttonpanel">
            <button className="button" onClick={() => { this.togglefornewpost() }}> New Post</button>
            <button className="button" onClick={() => { this.toggleforpublishedpost() }}>Published Post</button>
          </div>
          : false}

        {this.state.bothsection ?
          (
            <div>
              {

                this.state.bothsection ? viewboth() : false}
            </div>
          ) :
          (

            <div className="grid-container">
              <div className="item1">
                {this.state.newpost ? <PostForm /> : <AllPost />}

              </div>
            </div>
          )
        }
        <button className="togglebutton" onClick={this.toggleview}>ToggleView</button>
      </div>
    );
  }
}
export default App;